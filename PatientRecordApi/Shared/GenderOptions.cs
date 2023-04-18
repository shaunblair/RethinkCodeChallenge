using System.ComponentModel.DataAnnotations;

namespace PatientRecordApi.Shared;

public class GenderOption
{
    public int Id { get; set; }
    [Required, MaxLength(25)]
    public string FullGender { get; set; }
    [Required]
    public char ShortGender { get; set; }
}