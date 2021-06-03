/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Test de Prueba para Cliente de Infotec', () =>{ 
  let tiempo=1000
  before(()=>{    
    cy.visit('https://www.seleniumeasy.com/test/input-form-demo.html'),
    cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
    cy.wait(tiempo)
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  

  it('Prueba invalida por nombre', () =>{
    cy.Bloque_Reto_Form("R","Perez","carlos@gmail.com","5548748965","dirección uno","México","Alabama","07989","demo.com","Proyecto demo uno",tiempo)
    cy.Validar_campo2("(//small[@class='help-block'][contains(.,'Please enter more than 2 characters')])[1]","Please enter more than 2 characters","Nombre")
  })

  it('Prueba validar email', () =>{
    cy.Bloque_Reto_Form("Carlos","Perez","carlos@gmail.com","5548748965","dirección uno","México","Alabama","07989","demo.com","Proyecto demo uno",tiempo)
    cy.Validar_campo2("//small[contains(@data-bv-validator,'emailAddress')]","Please supply a valid email address","Emails")
   
  })


  it('Prueba invalida por Apellido', () =>{
    cy.Bloque_Reto_Form("Carlos","C","carlos@gmail.com","5548748965","dirección uno","México","Alabama","07989","demo.com","Proyecto demo uno",tiempo)
  })

  it('Prueba Ok', () =>{
    cy.Bloque_Reto_Form("Carlos","Perez","carlos@gmail.com","5548748965","dirección uno","México","Alabama","07989","demo.com","Proyecto demo uno",tiempo)
  })

  it('Prueba carga json', () =>{
    Cypress.config('defaultCommandTimeout', 25000)
    cy.fixture('datos2').then(testdata  => {
        testdata.forEach(data=>{            
            const v_nom=data.nombre
            const v_ap=data.apellido
            const v_email=data.email
            const v_tel=data.tel
            const v_dir1=data.dir1
            const v_ciudad=data.ciudad 
            const v_estado=data.estado
            const v_cp=data.cp
            const v_web=data.web
            const v_proyecto=data.proyecto

            cy.Bloque_Reto_Form(v_nom,v_ap,v_email,v_tel,v_dir1,v_ciudad,v_estado,v_cp,v_web,v_proyecto,tiempo)
         })
    })
    
})


  
});