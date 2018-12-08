using System;
using Microsoft.AspNetCore.Http;
using OMPhoenix.API.Models;

namespace OMPhoenix.API.Dtos
{
    public class JobCardDto
    {
        public JobCardDto()
        {
            CreatedDate = DateTime.Now;
        }
        public int Id { get; set; }
        public string Url { get; set; }
        public IFormFile File { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public string PublicId { get; set; }

        //public virtual Machine Machine{ get; set; }
        public int MachineId { get; set; }
    }
}