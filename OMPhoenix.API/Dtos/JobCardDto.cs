using System;
using OMPhoenix.API.Models;

namespace OMPhoenix.API.Dtos
{
    public class JobCardDto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }

        public virtual Machine Machine{ get; set; }
        public int MachineId { get; set; }
    }
}