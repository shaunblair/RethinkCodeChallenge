using Microsoft.EntityFrameworkCore;
using PatientRecordApi.Models;

namespace PatientRecordApi.Data;

public class PatientContext : DbContext
{
    public PatientContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Patient> Patients { get; set; }
}