using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlunosController : ControllerBase
    {
        angularContext _context = new angularContext();

        public IActionResult Index()
        {
            return Ok("Index");
        }

        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll()
        {
            var listaDeAlunos = _context.Aluno.ToList();
            return Ok(listaDeAlunos);
        }

        [HttpGet]
        [Route("Get/{id}")]
        public IActionResult Get(int id)
        {
            var aluno = _context.Aluno.Where(x => x.Id.Equals(id));
            return Ok(aluno);
        }

        [HttpPost]
        [Route("Insert")]
        public IActionResult Insert([FromBody]Aluno aluno)
        {
            _context.Aluno.Add(aluno);
            _context.SaveChanges();

            return Ok("Adicionado com sucesso!");
        }

        [HttpPut]
        [Route("Update")]
        public IActionResult Update([FromBody]Aluno aluno)
        {
            _context.Aluno.Update(aluno);
            _context.SaveChanges();

            return Ok("Alterado com sucesso!");
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            var aluno = _context.Aluno.Where(x => x.Id.Equals(id)).FirstOrDefault();
            _context.Aluno.Remove(aluno);
            _context.SaveChanges();
             
            return Ok("Deletado com sucesso!");
        }
    }
}