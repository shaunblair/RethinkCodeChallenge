using Microsoft.AspNetCore.Mvc;

namespace PatientRecordApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PatientController : ControllerBase
{
    [HttpGet] 
    public async Task<string> GetAllPatients()
    {
        return "This is all the patients";
    }
}