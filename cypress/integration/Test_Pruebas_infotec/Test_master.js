import test_PO from '../../support/pageObjects/Pruebas/test_PO'
/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')
import 'cypress-file-upload'


describe('Sipvi segunda Fase', () =>{ 

    const master= new test_PO()
    let numero_pruebas=2
    let tiempo_general=100
    


    //master.visitHome(500)
    
   
    it('Sipvi Agricola Positivo', () =>{
        Cypress.config('defaultCommandTimeout', 25000)
        master.Master_Agricola(tiempo_general,numero_pruebas)
        
    })

    it('Sipvi Pecuario Positivo', () =>{
        Cypress.config('defaultCommandTimeout', 25000)
        master.Master_Pecuario(tiempo_general,numero_pruebas)
        
    })

    it('Sipvi Comercial Positivo', () =>{
        Cypress.config('defaultCommandTimeout', 25000)
        master.Master_Comercial(tiempo_general,numero_pruebas)
        
    })

    it('Sipvi Agricola Negativo', () =>{
        Cypress.config('defaultCommandTimeout', 25000)
        master.Master_Agricola_Negativo(tiempo_general,numero_pruebas)
        
    })

    it('Sipvi Comercial Negativo', () =>{
        Cypress.config('defaultCommandTimeout', 25000)
        master.Master_Comercial_Negativo(tiempo_general,numero_pruebas)
        
    })


    
});