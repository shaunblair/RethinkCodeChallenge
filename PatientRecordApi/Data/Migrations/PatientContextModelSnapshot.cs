﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PatientRecordApi.Data;

#nullable disable

namespace PatientRecordApi.Data.Migrations
{
    [DbContext(typeof(PatientContext))]
    partial class PatientContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.5");

            modelBuilder.Entity("PatientRecordApi.Models.GenderOption", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("FullGender")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("TEXT");

                    b.Property<char>("ShortGender")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("GenderOptions");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            FullGender = "Male",
                            ShortGender = 'M'
                        },
                        new
                        {
                            Id = 2,
                            FullGender = "Female",
                            ShortGender = 'F'
                        },
                        new
                        {
                            Id = 3,
                            FullGender = "Non-binary",
                            ShortGender = 'N'
                        },
                        new
                        {
                            Id = 4,
                            FullGender = "Other",
                            ShortGender = 'O'
                        });
                });

            modelBuilder.Entity("PatientRecordApi.Models.Patient", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Birthday")
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.Property<int>("GenderId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(75)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("GenderId");

                    b.ToTable("Patients");
                });

            modelBuilder.Entity("PatientRecordApi.Models.Patient", b =>
                {
                    b.HasOne("PatientRecordApi.Models.GenderOption", "Gender")
                        .WithMany()
                        .HasForeignKey("GenderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Gender");
                });
#pragma warning restore 612, 618
        }
    }
}
