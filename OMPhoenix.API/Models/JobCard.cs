using System;

namespace OMPhoenix.API.Models
{
    public class JobCard
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }

        public virtual Machine Machine{ get; set; }
        public int MachineId { get; set; }

    }
}