import test_PO from '../../support/pageObjects/Pruebas/test_PO'
/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')
import 'cypress-file-upload'


describe('Sipvi segunda Fase', () =>{ 

    const master= new test_PO()
    let numero_pruebas=1
    let tiempo_general=1000
    


    //master.visitHome(500)
    
   
    it('Sipvi Agricola Positivo', () =>{
        Cypress.config('defaultCommandTimeout', 25000)
        master.Master_Agricola(tiempo_general,numero_pruebas)
        
    }) 

  


    
});