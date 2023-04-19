using System.ComponentModel.DataAnnotations;

namespace PatientRecordApi.Models;

public class Patient
{
    public int Id { get; set; }
    
    [Required, MaxLength(50)]
    public string FirstName { get; set; }
    
    [Required, MaxLength(75)]
    public string LastName { get; set; }
    
    [Required]
    public DateTime Birthday { get; set; }
    
    [Required]
    public GenderOption Gender { get; set; }
}