using System;
using System.Collections.Generic;

namespace OMPhoenix.API.Models
{
    public class Machine
    {
        public int Id { get; set; }
        public string ContactNumber { get; set; }
        public string MachineSerialNo { get; set; }
        public string MachineMake { get; set; }
        public string MachineModel { get; set; }
        public DateTime LastService { get; set; }
        public string LastServiceHours { get; set; }
        public string CurrentRunningHours { get; set; }
        public string CurrentLoadingHours { get; set; }
        public string Message { get; set; }
        public virtual User User { get; set; }
        public int UserId { get; set; }
        public ICollection<JobCard> JobCards { get; set; }
    }
}