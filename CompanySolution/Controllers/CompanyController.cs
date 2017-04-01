using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CompanySolution.Services;
using DAL.Entities;

namespace CompanySolution.Controllers
{
    [Route("api/[controller]")]
    public class CompanyController : Controller
    {
        private CompanyService _companyService;

        public CompanyController(CompanyService companyService)
        {
            _companyService = companyService;
        }
        [HttpGet]
        public Task<List<Company>> Get()
        {
            return _companyService.GetCompanies();
        }

        [HttpGet("{id}")]
        public Task<Company> Get(int id)
        {
            return _companyService.GetCompany(id);
        }

        [HttpPost]
        public Task Post([FromBody]Company company)
        {
            return _companyService.AddCompany(company);
        }

        [HttpPost("{id}/user")]
        public Task Post(int id, [FromBody]User user)
        {
            return _companyService.AddUser(id, user);
        }

        [HttpPut("{id}")]
        public Task Put(int id, [FromBody]Company company)
        {
            return _companyService.UpdateCompany(id, company);
        }

        [HttpDelete("{id}")]
        public Task Delete(int id)
        {
            return _companyService.DeleteCompany(id);
        }
    }
}
