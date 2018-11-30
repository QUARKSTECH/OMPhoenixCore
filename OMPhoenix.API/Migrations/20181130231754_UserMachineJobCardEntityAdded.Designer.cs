﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using OMPhoenix.API.Data;

namespace OMPhoenix.API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20181130231754_UserMachineJobCardEntityAdded")]
    partial class UserMachineJobCardEntityAdded
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024");

            modelBuilder.Entity("OMPhoenix.API.Models.JobCard", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Description");

                    b.Property<int>("MachineId");

                    b.Property<string>("Url");

                    b.HasKey("Id");

                    b.HasIndex("MachineId");

                    b.ToTable("JobCards");
                });

            modelBuilder.Entity("OMPhoenix.API.Models.Machine", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ContactNumber");

                    b.Property<DateTime>("LastService");

                    b.Property<string>("LastServiceHours");

                    b.Property<string>("MachineMake");

                    b.Property<string>("MachineModel");

                    b.Property<string>("MachineSerialNo");

                    b.Property<string>("Message");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Machines");
                });

            modelBuilder.Entity("OMPhoenix.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CompanyName");

                    b.Property<string>("ContactNumber");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Email");

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("OMPhoenix.API.Models.JobCard", b =>
                {
                    b.HasOne("OMPhoenix.API.Models.Machine", "Machine")
                        .WithMany("JobCards")
                        .HasForeignKey("MachineId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OMPhoenix.API.Models.Machine", b =>
                {
                    b.HasOne("OMPhoenix.API.Models.User", "User")
                        .WithMany("Machines")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
