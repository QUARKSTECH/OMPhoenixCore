using System;
using System.Collections.Generic;
using OMPhoenix.API.Models;

namespace OMPhoenix.API.Dtos
{
    public class MachineDto
    {
        public int Id { get; set; }
        public int ContactNumber { get; set; }
        public string MachineSerialNo { get; set; }
        public string MachineMake { get; set; }
        public string MachineModel { get; set; }
        public DateTime LastService { get; set; }
        public string LastServiceHours { get; set; }
        public string Message { get; set; }
        public virtual User User { get; set; }
        public int UserId { get; set; }
        public ICollection<JobCardDto> JobCards { get; set; }
    }
}