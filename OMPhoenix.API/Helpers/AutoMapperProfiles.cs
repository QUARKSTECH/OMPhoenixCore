using System.Collections.Generic;
using AutoMapper;
using OMPhoenix.API.Dtos;
using OMPhoenix.API.Models;

namespace OMPhoenix.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Machine, MachineDto>();
            CreateMap<MachineDto, Machine>();

            CreateMap<JobCard, JobCardDto>();
            CreateMap<JobCardDto, JobCard>();

            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
        }
    }
}