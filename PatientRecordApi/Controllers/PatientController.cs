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
}