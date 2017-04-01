using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Entities
{
    public class Company : IEntity
    {
        public Company()
        {
            Staff = new List<User>();
        }
        public long Id { get; set; }
        public string Name { get; set; }
        public DateTime FoundingDate { get; set; }
        public Address Address { get; set; }
        public User Founder { get; set; }
        public List<User> Staff { get; set; }
    }
}
