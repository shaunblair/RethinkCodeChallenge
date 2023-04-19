using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PatientRecordApi.Data;
using PatientRecordApi.Models;

namespace PatientRecordApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PatientController : ControllerBase
{
    private PatientContext _context;

    public PatientController(PatientContext context)
    {
        _context = context;
    }

    [HttpGet] 
    public async Task<List<Patient>> GetAllPatients()
    {
        return await _context.Patients.Include(p => p.Gender).ToListAsync();
    }

    [HttpPost]
    public async Task<IActionResult> UploadPatients(IFormFile csvFile)
    {
      using (var reader = new StreamReader(csvFile.OpenReadStream()))
      {
        var csvData = reader.ReadToEnd();
        var rows = csvData.Split('\n');
        var headerCount = 0;

        foreach (var row in rows)
        {
            if (!string.IsNullOrEmpty(row))
            {
                if (headerCount > 0)
                {
                    try
                    {
                        var values = row.Split(',');

                        var patient = new Patient
                        {
                            FirstName = values[0].ToString(),
                            LastName = values[1].ToString(),
                            Birthday = DateTime.Parse(values[2].ToString()),
                            Gender = _context.GenderOptions.Where(g => g.ShortGender.ToString() == values[3].Substring(0,1)).First()
                        };

                        var record = _context.Patients.Where(p => p.FirstName == values[0].ToString() && p.LastName == values[1].ToString()).FirstOrDefault();
                        if (record == null)
                        {
                            _context.Patients.Add(patient);
                        }
                    }
                    catch(Exception ex)
                    {
                        // catch records here and log out which failed
                        // add table for error records
                    }
                }
                headerCount++;
            }
        }

        await _context.SaveChangesAsync();
      }

      return Ok();
    }

    [HttpPut]
    public async Task<IActionResult> UpdatePatientById(Patient pat)
    {
        _context.Patients.Update(pat);

        await _context.SaveChangesAsync();

        return Ok();
    }

}