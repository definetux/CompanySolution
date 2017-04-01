using DAL;
using DAL.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CompanySolution.Services
{
    public class CompanyService
    {
        public async Task<List<Company>> GetCompanies()
        {
            using (var context = new CompanySolutionContext())
            {
                var companies = await context.Companies
                                        .Include(x => x.Address)
                                        .Include(x => x.Founder)
                                        .Include(x => x.Staff).ToListAsync();
                return companies;
            }
        }

        public async Task<Company> GetCompany(int id)
        {
            using (var context = new CompanySolutionContext())
            {
                var company = await context.Companies
                                        .Include(x => x.Address)
                                        .Include(x => x.Founder)
                                        .Include(x => x.Staff)
                                        .SingleOrDefaultAsync(x => x.Id == id);
                return company;
            }
        }

        public async Task AddUser(int id, User user)
        {
            using (var context = new CompanySolutionContext())
            {
                var entity = await context.Companies.SingleOrDefaultAsync(x => x.Id == id);
                if (entity != null)
                {
                    entity.Staff.Add(user);
                    await context.SaveChangesAsync();
                }
            }
        }

        public async Task DeleteCompany(int id)
        {
            using (var context = new CompanySolutionContext())
            {
                var entity = await context.Companies.SingleOrDefaultAsync(x => x.Id == id);
                if (entity != null)
                {
                    context.Companies.Remove(entity);
                    await context.SaveChangesAsync();
                }
            }
        }

        public async Task UpdateCompany(long id, Company company)
        {
            using (var context = new CompanySolutionContext())
            {
                var entity = await context.Companies.Include(x => x.Address).SingleOrDefaultAsync(x => x.Id == id);
                if (entity != null)
                {
                    entity.Name = company.Name;
                    entity.FoundingDate = company.FoundingDate;

                    await context.SaveChangesAsync();
                }
            }
        }

        public async Task AddCompany(Company company)
        {
            using (var context = new CompanySolutionContext())
            {
                context.Companies.Add(company);
                await context.SaveChangesAsync();
            }
        }
    }
}
