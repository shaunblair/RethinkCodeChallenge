using Microsoft.EntityFrameworkCore;
using PatientRecordApi.Models;

namespace PatientRecordApi.Data;

public class PatientContext : DbContext
{
    public PatientContext(DbContextOptions options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<GenderOption>().HasData(
            new GenderOption {Id = 1, FullGender = "Male", ShortGender = 'M'},
            new GenderOption {Id = 2, FullGender = "Female", ShortGender = 'F'},
            new GenderOption {Id = 3, FullGender = "Non-binary", ShortGender = 'N'},
            new GenderOption {Id = 4, FullGender = "Other", ShortGender = 'O'}
            );
    }

    public DbSet<Patient> Patients { get; set; }
    public DbSet<GenderOption> GenderOptions { get; set; }
}