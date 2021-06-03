class test_PO{
    

    
    Master_Agricola(t,np){
        let tiempo=t
        let folios
        //let animales=ani
        let numero_pruebas=np
        for(let num=1;num<=numero_pruebas;num++)
        {

            cy.visit('http://10.16.3.29:8007/login'),
            cy.title().should('eq','SIPVI | SENASICA')
            cy.wait(tiempo)

            
            //Login
            let user_Arr = ["user.1", "user.2","user.3"];
            let Random_user = user_Arr[Math.floor(Math.random()*user_Arr.length)]; 
            cy.get('#usuario').should('be.visible').type(Random_user)
            cy.wait(tiempo)
            cy.get('#contrasenia').should('be.visible').type('sipvids')
            cy.wait(tiempo)
            cy.get("#id_ingresar_sipvi").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Seleccionar Estado al Inicio

            let estado_Arr = ["1: 1", "3: 13","5: 32"];
            let Random_estado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)]; 
            cy.get('#estado').select(Random_estado).should('have.value',Random_estado)
            cy.wait(1000)
            if(Random_estado=="1: 1"){
                let inspeccion_Arr = ["Sitios de Inspección 1", "Sitios de Inspección 2"];
                let Random_inspeccion = inspeccion_Arr[Math.floor(Math.random()*inspeccion_Arr.length)]; 
                cy.get('#sitioInspeccion').select(Random_inspeccion)
                cy.wait(1000)
                cy.log(Random_inspeccion)
            }
            else if(Random_estado=="3: 13"){
                let inspeccion_Arr = ["Sitio de Inspección (PVI-001) Hidalgo"];
                let Random_inspeccion = inspeccion_Arr[Math.floor(Math.random()*inspeccion_Arr.length)]; 
                cy.get('#sitioInspeccion').select(Random_inspeccion)
                cy.wait(1000)
                cy.log(Random_inspeccion)
            }
            else if(Random_estado=="5: 32"){
                let inspeccion_Arr = ["NOMBRE_1"];
                let Random_inspeccion = inspeccion_Arr[Math.floor(Math.random()*inspeccion_Arr.length)]; 
                cy.get('#sitioInspeccion').select(Random_inspeccion)
                cy.wait(1000)
                cy.log(Random_inspeccion)
            }
            cy.xpath("//button[@class='btn btn-primary pull-right size'][contains(.,'Ingresar')]").should('be.visible').click({force: true})
            cy.wait(tiempo)


            //Inicia Registro diario
            cy.get('#id_menu_registro_diario').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.xpath("//a[@class='dropdown-toggle'][contains(.,'Comercial')]").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Mercancia Agricola
            cy.get('#selClasificacionMercanciaInfGeneral').select("Agrícola")
            let tipo_m_Arr = ["Industrial","No Regulada","Regulada"];
            let Random_tipo_m = tipo_m_Arr[Math.floor(Math.random()*tipo_m_Arr.length)]; 
            cy.get('#selTipoMercanciaInfGeneral').select(Random_tipo_m)
            cy.get('#btnNoPresentarDoc').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Siguiente')]").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Datos de Registro
            //Estado
            let estado_2_Arr = ["Aguascalientes","Campeche","Chiapas"];
            let Random_estado_2 = estado_2_Arr[Math.floor(Math.random()*estado_2_Arr.length)]; 
            cy.get('#selEstadoOrigen').select(Random_estado_2)
            if(Random_estado_2=="Aguascalientes"){
                let municipio_Arr = ["Aguascalientes", "Asientos","Calvillo"];
                let Random_municipio = municipio_Arr[Math.floor(Math.random()*municipio_Arr.length)]; 
                cy.xpath("//select[contains(@id,'selMunicipioOrigen ')]").select(Random_municipio)
                cy.wait(1000)
                cy.log(Random_municipio)
            }
            else if(Random_estado_2=="Campeche"){
                let municipio_Arr = ["Calakmul", "Campeche","Carmen"];
                let Random_municipio = municipio_Arr[Math.floor(Math.random()*municipio_Arr.length)]; 
                cy.xpath("//select[contains(@id,'selMunicipioOrigen ')]").select(Random_municipio)
                cy.wait(1000)
                cy.log(Random_municipio)
            }
            else if(Random_estado_2=="Chiapas"){
                let municipio_Arr = ["Acacoyagua", "Acala","Aldama"];
                let Random_municipio = municipio_Arr[Math.floor(Math.random()*municipio_Arr.length)]; 
                cy.xpath("//select[contains(@id,'selMunicipioOrigen ')]").select(Random_municipio)
                cy.wait(1000)
                cy.log(Random_municipio)
            }
            //Empresa Origen
            let empresa_Arr = ["Empresa movilizadora 1", "Empresa movilizadora 2","Empresa movilizadora 5"];
            let Random_empresa = empresa_Arr[Math.floor(Math.random()*empresa_Arr.length)]; 
            cy.get("#selEmpresaOrigen").select(Random_empresa)
            cy.wait(1000)
            cy.log(Random_empresa)

            //Destino Estado
             let estado_3_Arr = ["Aguascalientes","Campeche","Chiapas"];
             let Random_estado_3 = estado_3_Arr[Math.floor(Math.random()*estado_3_Arr.length)]; 
             cy.get('#selEstadoDestino').select(Random_estado_3)
             if(Random_estado_3=="Aguascalientes"){
                 let municipio_2_Arr = ["Aguascalientes", "Asientos","Calvillo"];
                 let Random_municipio_2 = municipio_2_Arr[Math.floor(Math.random()*municipio_2_Arr.length)]; 
                 cy.get("#selMunicipioDestino").select(Random_municipio_2)
                 cy.wait(1000)
                 cy.log(Random_municipio_2)
             }
             else if(Random_estado_3=="Campeche"){
                 let municipio_2_Arr = ["Calakmul", "Campeche","Carmen"];
                 let Random_municipio_2 = municipio_2_Arr[Math.floor(Math.random()*municipio_2_Arr.length)]; 
                 cy.get("#selMunicipioDestino").select(Random_municipio_2)
                 cy.wait(1000)
                 cy.log(Random_municipio_2)
             }
             else if(Random_estado_3=="Chiapas"){
                 let municipio_2_Arr = ["Acacoyagua", "Acapetahua","Aldama"];
                 let Random_municipio_2 = municipio_2_Arr[Math.floor(Math.random()*municipio_2_Arr.length)]; 
                 cy.get("#selMunicipioDestino").select(Random_municipio_2)
                 cy.wait(1000)
                 cy.log(Random_municipio_2)
             }
             //Empresa Destino
             let empresa_2_Arr = ["Empresa movilizadora 1", "Empresa movilizadora 2","Empresa movilizadora 5"];
             let Random_empresa_2 = empresa_2_Arr[Math.floor(Math.random()*empresa_2_Arr.length)]; 
             cy.get("#selEmpresaDestino").select(Random_empresa_2)
             cy.wait(1000)
             cy.log(Random_empresa_2)

             //Tipo de vehiculo
             let vehiculo_Arr = ["Tipo de vehículo 2", "Tipo de vehículo 3"];
             let Random_vehiculo = vehiculo_Arr[Math.floor(Math.random()*vehiculo_Arr.length)]; 
             cy.get("#selTipoVehiculo").select(Random_vehiculo)

             //Placas
             let placas=Math.floor(Math.random() * 198989879);
             cy.get('#txtPlacas').should('be.visible').type('rtf-w'+placas)
             cy.wait(tiempo)

             let fecha1=new Date()
             let dia1  = (fecha1.getDate() + 0).toString().padStart(2, "0");
             let mes1  = (fecha1.getMonth() + 1).toString().padStart(2, "0");
             let anio1 = fecha1.getFullYear();                
             let fecha_uno=(anio1+"-"+mes1+"-"+dia1)
             cy.log(fecha_uno)             
             cy.get('#txtFechaInspeccion').should('be.visible').type(fecha_uno)
             //Hora
             cy.get('#form_1 > .form-group > .col-md-12 > #txtHoraInspeccion > .ant-time-picker-input').click() 
             cy.get('.ant-time-picker-panel-inner > .ant-time-picker-panel-combobox > .ant-time-picker-panel-select:nth-child(1) > ul > .ng-star-inserted:nth-child(12)').click() 
             cy.get('.ant-time-picker-panel-inner > .ant-time-picker-panel-combobox > .ant-time-picker-panel-select > ul > .ng-star-inserted:nth-child(31)').click() 
             cy.get('.pace-done > .cdk-overlay-container > .cdk-overlay-backdrop').click()


             //Grupo de Mercancias.
             let mercancia_Arr = ["Grupo de mercancía 1"];
             let Random_mercancia = mercancia_Arr[Math.floor(Math.random()*mercancia_Arr.length)]; 
             cy.get("#selGrupoMercancia").select(Random_mercancia)
             cy.wait(1000)
             cy.log(Random_mercancia)
             //Mercancia
             let mercancia2_Arr = ["Mercancía 1"];
             let Random_mercancia2 = mercancia2_Arr[Math.floor(Math.random()*mercancia2_Arr.length)]; 
             cy.get("#selMercancia").select(Random_mercancia2)
             cy.wait(1000)
             cy.log(Random_mercancia2)
             //Variedad Mercancia
             let variedad_mercancia_Arr = ["Variedad 1 M1","Variedad 3 M1"];
             let Random_variedad_mercancia = variedad_mercancia_Arr[Math.floor(Math.random()*variedad_mercancia_Arr.length)]; 
             cy.get("#selVariedadMercancia").select(Random_variedad_mercancia)
             cy.wait(1000)
             //Motivo de movilizacion
             let movilizacion_Arr = ["Motivo de movilizació 1","Motivo de movilizació 10","Motivo de movilizació 13"];
             let Random_movilizacion = movilizacion_Arr[Math.floor(Math.random()*movilizacion_Arr.length)]; 
             cy.get("#selMotivoMovilizacion").select(Random_movilizacion)
             cy.wait(1000)

             //cantidad
             let cantidad=Math.floor(Math.random() * 30);
             cy.get('#txtCantidad').should('be.visible').type(cantidad)
             cy.wait(tiempo)

             //Presentacion de Mercancia
             let presentacion_mercancia_Arr = ["3","4","5","6","7"];
             let Random_presentacion_mercancia = presentacion_mercancia_Arr[Math.floor(Math.random()*presentacion_mercancia_Arr.length)]; 
             cy.get("#selPresentacionMercancia").select(Random_presentacion_mercancia)
             cy.wait(1000)

             //Peso
             cy.get('#txtPeso').should('be.visible').type(cantidad+100)
             cy.wait(tiempo)

             //Unidad de Medida
             let unidad_medida_Arr = ["Unidad medida 1","Unidad medida 13","Unidad medida 15"];
             let Random_unidad_medida = unidad_medida_Arr[Math.floor(Math.random()*unidad_medida_Arr.length)]; 
             cy.get("#selUnidadMedida").select(Random_unidad_medida)
             cy.wait(1000)
             //Agregar
             cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Agregar')]").should('be.visible').click({force: true})
             cy.wait(tiempo)
             //Observacion
             cy.get('#txtObservacion').should('be.visible').type('Demo de Observación numero #'+cantidad+300)
             cy.wait(tiempo)
             //Validar datos
             cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Validar Datos')]").should('be.visible').click({force: true})
             cy.wait(2000)

             //Click siguiente 
             cy.xpath("(//button[@class='btn btn-primary size'][contains(.,'Siguiente')])[2]").should('be.visible').click({force: true})
             cy.wait(tiempo)



             //DOCUMENTACIÓN SOPORTE
             let soporte_Arr = ["Tipo de documentación soporte 2","Tipo de documentación soporte 4"];
             let Random_soporte = soporte_Arr[Math.floor(Math.random()*soporte_Arr.length)]; 
             cy.get("#selTipoDocumentoSoporte").select(Random_soporte)
             cy.wait(1000)
             //Folio
             let folio=Math.floor(Math.random() * 766709809);
             cy.get('#txtFolioDocSoporte').should('be.visible').type(folio)
             cy.wait(tiempo)
             //Estado soporte
             let estado_4_Arr = ["Aguascalientes","Campeche"];
             let Random_estado_4 = estado_4_Arr[Math.floor(Math.random()*estado_4_Arr.length)]; 
             cy.get('#selEstadoDocSoporte').select(Random_estado_4)
             if(Random_estado_4=="Aguascalientes"){
                 let municipio_3_Arr = ["Aguascalientes", "Asientos","El Llano"];
                 let Random_municipio_3 = municipio_3_Arr[Math.floor(Math.random()*municipio_3_Arr.length)]; 
                 cy.get("#selMunicipioDocSoporte").select(Random_municipio_3)
                 cy.wait(1000)
                 cy.log(Random_municipio_3)
             }
             else if(Random_estado_4=="Campeche"){
                 let municipio_3_Arr = ["Calkiní", "Campeche","Carmen"];
                 let Random_municipio_3 = municipio_3_Arr[Math.floor(Math.random()*municipio_3_Arr.length)]; 
                 cy.get("#selMunicipioDocSoporte").select(Random_municipio_3)
                 cy.wait(1000)
                 cy.log(Random_municipio_3)
             }
             //fechas
             cy.get('#txtFechaExpedicionDocSoporte').should('be.visible').type(fecha_uno)
             cy.wait(tiempo)
             let fecha_2V=new Date()
             let dia_V  = (fecha_2V.getDate() + 0).toString().padStart(2, "0");            
             let mes_2v  = (fecha_2V.getMonth() + 2).toString().padStart(2, "0");
             let anio_2 = fecha_2V.getFullYear();                
             let fecha_dosV=(anio_2+"-"+mes_2v+"-"+dia_V)
             cy.get('#txtFechaVigenciaDocSoporte').should('be.visible').type(fecha_dosV)
             cy.wait(tiempo)
             //Clave expendidor
             cy.get('#chkClaveExpedidor').should('be.visible').click({force: true})
             cy.wait(tiempo)
             //Agregar
             cy.get('#btnAgregarDocSoporte').should('be.visible').click({force: true})
             cy.wait(tiempo)
             //Observaciones
             cy.xpath("//textarea[@placeholder='Observaciones']").should('be.visible').type('Demo de la Observación dos numero #'+folio+200)
             cy.wait(tiempo)
             //Siguiente
             cy.xpath("//button[@class='btn btn-primary  size'][contains(.,'Siguiente')]").should('be.visible').click({force: true})
             cy.wait(tiempo)




             //VISTA PREVIA
             cy.xpath("//button[@href='#panel-01']").should('be.visible').click({force: true})
             cy.wait(1000)
             cy.xpath("//button[@href='#panel-01']").should('be.visible').click({force: true})
             cy.wait(1000)
             //POSITIVO
             cy.get('#radioC').should('be.visible').click({force: true})
             cy.wait(tiempo)
             //Resultado inpección
             let resultado_Arr = ["Resultado de la verificación e inspección Positivo-1", "Resultado de la verificación e inspección Positivo-2","Resultado de la verificación e inspección Positivo-3"];
             let Random_resultado = resultado_Arr[Math.floor(Math.random()*resultado_Arr.length)]; 
             cy.xpath("//select[@formcontrolname='resultadoVerificacionId']").select(Random_resultado)
             cy.wait(1000)

             //Finalizar
             cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Finalizar')]").should('be.visible').click({force: true})
             cy.wait(1500)
           
             //Cancelar
             cy.xpath('//*[@id="modalVistaFinalizar"]/div/div/div[3]/button[1]').click({force: true})
             cy.wait(1500)

            //Salir
            cy.get('#id_salir_sipvi').should('be.visible').click({force: true})
            cy.wait(1000)
  
            


            
        }
       

    }//final bloque master

    Master_Pecuario(t,np){
        let tiempo=t
        let folios
        //let animales=ani
        let numero_pruebas=np
        for(let num=1;num<=numero_pruebas;num++)
        {

            cy.visit('http://10.16.3.29:8007/login'),
            cy.title().should('eq','SIPVI | SENASICA')
            cy.wait(tiempo)

            
            //Login
            cy.get('#usuario').should('be.visible').type('user.1')
            cy.wait(tiempo)
            cy.get('#contrasenia').should('be.visible').type('sipvids')
            cy.wait(tiempo)
            cy.get("#id_ingresar_sipvi").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Seleccionar Estado al Inicio

            let estado_Arr = ["1: 1", "3: 13","5: 32"];
            let Random_estado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)]; 
            cy.get('#estado').select(Random_estado).should('have.value',Random_estado)
            cy.wait(1000)
            if(Random_estado=="1: 1"){
                let inspeccion_Arr = ["Sitios de Inspección 1", "Sitios de Inspección 2"];
                let Random_inspeccion = inspeccion_Arr[Math.floor(Math.random()*inspeccion_Arr.length)]; 
                cy.get('#sitioInspeccion').select(Random_inspeccion)
                cy.wait(1000)
                cy.log(Random_inspeccion)
            }
            else if(Random_estado=="3: 13"){
                let inspeccion_Arr = ["Sitio de Inspección (PVI-001) Hidalgo"];
                let Random_inspeccion = inspeccion_Arr[Math.floor(Math.random()*inspeccion_Arr.length)]; 
                cy.get('#sitioInspeccion').select(Random_inspeccion)
                cy.wait(1000)
                cy.log(Random_inspeccion)
            }
            else if(Random_estado=="5: 32"){
                let inspeccion_Arr = ["NOMBRE_1"];
                let Random_inspeccion = inspeccion_Arr[Math.floor(Math.random()*inspeccion_Arr.length)]; 
                cy.get('#sitioInspeccion').select(Random_inspeccion)
                cy.wait(1000)
                cy.log(Random_inspeccion)
            }
            cy.xpath("//button[@class='btn btn-primary pull-right size'][contains(.,'Ingresar')]").should('be.visible').click({force: true})
            cy.wait(tiempo)


            //Inicia Registro diario
            cy.get('#id_menu_registro_diario').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.xpath("//a[@class='dropdown-toggle'][contains(.,'Comercial')]").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Mercancia Agricola
            cy.get('#selClasificacionMercanciaInfGeneral').select("Pecuario")
            let tipo_m_Arr = ["Industrial","No Regulada","Regulada"];
            let Random_tipo_m = tipo_m_Arr[Math.floor(Math.random()*tipo_m_Arr.length)]; 
            cy.get('#selTipoMercanciaInfGeneral').select(Random_tipo_m)
            cy.get('#btnNoPresentarDoc').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Siguiente')]").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Datos de Registro
            //Especie
            let especie_Arr = ["Especie 3","Especie 4","Especie 5"];
            let Random_especie = especie_Arr[Math.floor(Math.random()*especie_Arr.length)]; 
            cy.get('#selEspecie').select(Random_especie)
            cy.wait(1000)
            //Grupo de Mercancia
            let gm_Arr = ["Grupo de mercancía 2","Grupo de mercancía 4"];
            let Random_gm = gm_Arr[Math.floor(Math.random()*gm_Arr.length)]; 
            cy.get('#selGrupoMercancia').select(Random_gm)
            cy.wait(1500)
                if(Random_gm=="Grupo de mercancía 2"){
                    let mer_Arr = ["Mercancía 10","Mercancía 12","Mercancía 14"];
                    let Random_mer = mer_Arr[Math.floor(Math.random()*mer_Arr.length)]; 
                    cy.get('#selMercancia').select(Random_mer)
                    cy.wait(1000)
                }
                else if(Random_gm=="Grupo de mercancía 4"){
                    let mer_Arr = ["Mercancía 16","Mercancía 2","Mercancía 22"];
                    let Random_mer = mer_Arr[Math.floor(Math.random()*mer_Arr.length)]; 
                    cy.get('#selMercancia').select(Random_mer)
                    cy.wait(1000)
                }
            //Cantidad
            let can=Math.floor(Math.random() * 30);
            cy.get('#txtCantidad').should('be.visible').type(can)
            cy.wait(tiempo)
            //unidad de Medida
            let medida_Arr = ["Unidad medida 12","Unidad medida 16"];
            let Random_medida = medida_Arr[Math.floor(Math.random()*medida_Arr.length)]; 
            cy.get('#selUnidadMedida').select(Random_medida)
            cy.wait(1000)
                //Motivo Animal
                if(Random_gm=="Grupo de mercancía 2"){
                    let motivo_Arr = ["prueba de motivo movilizaciónn"];
                    let Random_motivo = motivo_Arr[Math.floor(Math.random()*motivo_Arr.length)]; 
                    cy.get('#selMotivoAnimal').select(Random_motivo)
                    cy.wait(1000)
                    //Producto
                    let producto_Arr = ["prueba de motivo movilizaciónn","Motivo de movilizació 5"];
                    let Random_producto = producto_Arr[Math.floor(Math.random()*producto_Arr.length)]; 
                    cy.get('#selMotivoProducto').select(Random_producto)
                    cy.wait(1000)
                }

                else if(Random_gm=="Grupo de mercancía 4"){                   
                    //Producto
                    let producto_Arr = ["prueba de motivo movilizaciónn","Motivo de movilizació 5"];
                    let Random_producto = producto_Arr[Math.floor(Math.random()*producto_Arr.length)]; 
                    cy.get('#selMotivoProducto').select(Random_producto)
                    cy.wait(1000)
                    cy.log("SIN MOTIVO ANIMAL")
                }
            
            //Agregar
            cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Agregar')]").should('be.visible').click({force: true})
            cy.wait(tiempo)

            

                            


            //Translado
            let estado_2_Arr = ["Aguascalientes","Campeche"];
            let Random_estado_2 = estado_2_Arr[Math.floor(Math.random()*estado_2_Arr.length)]; 
            cy.get('#selEstadoOrigen').select(Random_estado_2)
            if(Random_estado_2=="Aguascalientes"){
                let municipio_Arr = ["Aguascalientes", "Asientos","Calvillo"];
                let Random_municipio = municipio_Arr[Math.floor(Math.random()*municipio_Arr.length)]; 
                cy.xpath("//select[contains(@id,'selMunicipioOrigen ')]").select(Random_municipio)
                cy.wait(1000)
                cy.log(Random_municipio)
            }
            else if(Random_estado_2=="Campeche"){
                let municipio_Arr = ["Calakmul", "Campeche","Carmen"];
                let Random_municipio = municipio_Arr[Math.floor(Math.random()*municipio_Arr.length)]; 
                cy.xpath("//select[contains(@id,'selMunicipioOrigen ')]").select(Random_municipio)
                cy.wait(1000)
                cy.log(Random_municipio)
            }
           
            //Empresa Origen
            let empresa_Arr = ["Empresa movilizadora 3", "Empresa movilizadora 3"];
            let Random_empresa = empresa_Arr[Math.floor(Math.random()*empresa_Arr.length)]; 
            cy.get("#selEmpresaOrigen").select(Random_empresa)
            cy.wait(1000)
            cy.log(Random_empresa)

            //Destino Estado
             let estado_3_Arr = ["Aguascalientes","Campeche","Chiapas"];
             let Random_estado_3 = estado_3_Arr[Math.floor(Math.random()*estado_3_Arr.length)]; 
             cy.get('#selEstadoDestino').select(Random_estado_3)
             if(Random_estado_3=="Aguascalientes"){
                 let municipio_2_Arr = ["Aguascalientes", "Asientos","Calvillo"];
                 let Random_municipio_2 = municipio_2_Arr[Math.floor(Math.random()*municipio_2_Arr.length)]; 
                 cy.get("#selMunicipioDestino").select(Random_municipio_2)
                 cy.wait(1000)
                 cy.log(Random_municipio_2)
             }
             else if(Random_estado_3=="Campeche"){
                 let municipio_2_Arr = ["Calakmul", "Campeche","Carmen"];
                 let Random_municipio_2 = municipio_2_Arr[Math.floor(Math.random()*municipio_2_Arr.length)]; 
                 cy.get("#selMunicipioDestino").select(Random_municipio_2)
                 cy.wait(1000)
                 cy.log(Random_municipio_2)
             }
             else if(Random_estado_3=="Chiapas"){
                 let municipio_2_Arr = ["Acacoyagua", "Acapetahua","Aldama"];
                 let Random_municipio_2 = municipio_2_Arr[Math.floor(Math.random()*municipio_2_Arr.length)]; 
                 cy.get("#selMunicipioDestino").select(Random_municipio_2)
                 cy.wait(1000)
                 cy.log(Random_municipio_2)
             }
             //Empresa Destino
             let empresa_2_Arr = ["Empresa movilizadora 3", "Empresa movilizadora 4"];
             let Random_empresa_2 = empresa_2_Arr[Math.floor(Math.random()*empresa_2_Arr.length)]; 
             cy.get("#selEmpresaDestino").select(Random_empresa_2)
             cy.wait(1000)
             cy.log(Random_empresa_2)

             //Fecha
             let fecha1=new Date()
             let dia1  = (fecha1.getDate() + 0).toString().padStart(2, "0");
             let mes1  = (fecha1.getMonth() + 1).toString().padStart(2, "0");
             let anio1 = fecha1.getFullYear();                
             let fecha_uno=(anio1+"-"+mes1+"-"+dia1)
             cy.log(fecha_uno)             
             cy.get('#txtFechaInspeccion').should('be.visible').type(fecha_uno)
             //Hora
             cy.get('.ng-invalid > .form-group > .col-md-12 > #txtHoraInspeccion > .ant-time-picker-input').click() 
             cy.get('.ant-time-picker-panel-inner > .ant-time-picker-panel-combobox > .ant-time-picker-panel-select:nth-child(1) > ul > .ng-star-inserted:nth-child(12)').click()          
             cy.get('.ant-time-picker-panel-inner > .ant-time-picker-panel-combobox > .ant-time-picker-panel-select > ul > .ng-star-inserted:nth-child(36)').click()          
             cy.get('.pace-done > .cdk-overlay-container > .cdk-overlay-backdrop').click()
           






             //Tipo de vehiculo
             let vehiculo_Arr = ["Tipo de vehículo 2", "Tipo de vehículo 3"];
             let Random_vehiculo = vehiculo_Arr[Math.floor(Math.random()*vehiculo_Arr.length)]; 
             cy.get("#selTipoVehiculo").select(Random_vehiculo)

             //Placas
             let placas=Math.floor(Math.random() * 198989879);
             cy.get('#txtPlacas').should('be.visible').type('rtf-w'+placas)
             cy.wait(tiempo)

             //Fleje
             cy.get('#txtFleje').should('be.visible').type("rftg"+can+100)
             cy.wait(tiempo)
            
             //Observacion
             cy.get('#txtObservacion').should('be.visible').type('Demo de Observación numero #'+can+98767564)
             cy.wait(tiempo)
             //Validar datos
             cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Validar Datos')]").should('be.visible').click({force: true})
             cy.wait(2000)
             cy.log("Valido ok")

             //Click siguiente 
             cy.xpath("(//button[@class='btn btn-primary size'][contains(.,'Siguiente')])[2]").should('be.visible').click({force: true})
             cy.wait(1200)

    



             //DOCUMENTACIÓN SOPORTE
             let soporte_Arr = ["Tipo de documentación soporte 3","Tipo de documentación soporte 5"];
             let Random_soporte = soporte_Arr[Math.floor(Math.random()*soporte_Arr.length)]; 
             cy.get("#selTipoDocumentoSoporte").select(Random_soporte)
             cy.wait(1000)
             //Folio
             let folio=Math.floor(Math.random() * 766709809);
             cy.get('#txtFolioDocSoporte').should('be.visible').type(folio)
             cy.wait(tiempo)
             //Origen
             cy.get('#txtRastroOrigen').should('be.visible').type('origen'+can+250)
             cy.wait(tiempo)
             //destino
             cy.get('#txtRastroDestino').should('be.visible').type('destino'+can+350)
             cy.wait(tiempo)
             //Fecha Expedicion
             cy.get('#txtFechaExpedicionDocSoporte').should('be.visible').type(fecha_uno)
             cy.wait(tiempo)
             //Fecha de Vigencia
             let fecha_2V=new Date()
             let dia_V  = (fecha_2V.getDate() + 0).toString().padStart(2, "0");            
             let mes_2v  = (fecha_2V.getMonth() + 2).toString().padStart(2, "0");
             let anio_2 = fecha_2V.getFullYear();                
             let fecha_dosV=(anio_2+"-"+mes_2v+"-"+dia_V)
             cy.get('#txtFechaVigenciaDocSoporte').should('be.visible').type(fecha_dosV)
             cy.wait(tiempo)
             //click expendidor check
             cy.get('#chkClaveExpedidor').should('be.visible').click({force: true})
             cy.wait(tiempo)
             //Agregar
             cy.xpath("//button[contains(@id,'btnAgregarDocSoporte')]").should('be.visible').click({force: true})
             cy.wait(tiempo)
             //Observacion
             cy.get("#formDocSoporte > :nth-child(7) > .form-control").should('be.visible').type('Demo de la Observación' +can+234543)
             cy.wait(tiempo)
             //siguiente
             cy.xpath("(//button[@class='btn btn-primary  size'][contains(.,'Siguiente')])[1]").should('be.visible').click({force: true})
             cy.wait(tiempo)


             //Rastros
             let tipo_Arr = ["Establecimiento TIF", "Rastro"];
             let Random_tipo1 = tipo_Arr[Math.floor(Math.random()*tipo_Arr.length)]; 
             cy.get("#formRastrosDisponibles > :nth-child(5) > .form-control").select(Random_tipo1)
             cy.wait(1000)
                if(Random_tipo1=="Rastro"){
                   cy.get(':nth-child(6) > .input-group > .form-control').type('Rastro')
                   cy.wait(tiempo)
                   cy.get(':nth-child(6) > .input-group > .input-group-btn > .btn').should('be.visible').click({force: true})
                   cy.wait(tiempo)
                }
                else if(Random_tipo1=="Establecimiento TIF"){
                    cy.get(':nth-child(7) > .input-group > .form-control').type('TIF-123')
                    cy.wait(tiempo)
                    cy.get(':nth-child(7) > .input-group > .input-group-btn > .btn').should('be.visible').click({force: true})
                    cy.wait(tiempo)

                }
            //click ckeck
            cy.get('#chkSacrificioNoRealizado').should('be.visible').click({force: true})
            cy.wait(tiempo)
            //Observación
            cy.get('.custom-form-control > .form-control').should('be.visible').type('No cuenta con rastro de Destino #'+can+12342)
            cy.wait(tiempo)
            //Siguiente
            cy.xpath("(//button[@class='btn btn-primary  size'][contains(.,'Siguiente')])[2]").should('be.visible').click({force: true})
            cy.wait(tiempo)




            //Vista Previa.
            cy.get('#radioC').should('be.visible').click({force: true})
            cy.wait(1000)
            cy.get('#radioNC').should('be.visible').click({force: true})
            cy.wait(1000)
            cy.get('#radioC').should('be.visible').click({force: true})
            cy.wait(2000)
          
            //Resultado
            let resultado2_Arr = ["Resultado de la verificación e inspección Positivo-10", "Resultado de la verificación e inspección Positivo-11","Resultado de la verificación e inspección Positivo-12"];
            let Random_resultado2 = resultado2_Arr[Math.floor(Math.random()*resultado2_Arr.length)]; 
            cy.xpath("//*[@id='tab-vista-previa']/app-vista-previa/div/div[5]/form/div[2]/div/select").select(Random_resultado2)
            // cy.get('.ng-star-inserted > .ng-touched > .row > .form-group > .form-control').click() 
            // cy.get('.ng-star-inserted > .ng-touched > .row > .form-group > .form-control').select('3: 19') 
            // cy.get('.ng-star-inserted > .ng-touched > .row > .form-group > .form-control').click()
            cy.wait(1000)
            //finalizar
            cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Finalizar')]").should('be.visible').click({force: true})
            cy.wait(tiempo)
            //Cancelar
            cy.xpath("//*[@id='modalVistaFinalizar']/div/div/div[3]/button[1]").should('be.visible').click({force: true})
            cy.wait(tiempo)


             //Salir
             cy.get('#id_salir_sipvi').should('be.visible').click({force: true})
             cy.wait(1000)

            
        }
       

    }//final bloque master

    Master_Comercial(t,np){
        let tiempo=t
        let folios
        //let animales=ani
        let numero_pruebas=np
        for(let num=1;num<=numero_pruebas;num++)
        {

            cy.visit('http://10.16.3.29:8007/login'),
            cy.title().should('eq','SIPVI | SENASICA')
            cy.wait(tiempo)

            
            //Login
            cy.get('#usuario').should('be.visible').type('user.1')
            cy.wait(tiempo)
            cy.get('#contrasenia').should('be.visible').type('sipvids')
            cy.wait(tiempo)
            cy.get("#id_ingresar_sipvi").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Seleccionar Estado al Inicio

            let estado_Arr = ["1: 1", "3: 13","5: 32"];
            let Random_estado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)]; 
            cy.get('#estado').select(Random_estado).should('have.value',Random_estado)
            cy.wait(1000)
            if(Random_estado=="1: 1"){
                let inspeccion_Arr = ["Sitios de Inspección 1", "Sitios de Inspección 2"];
                let Random_inspeccion = inspeccion_Arr[Math.floor(Math.random()*inspeccion_Arr.length)]; 
                cy.get('#sitioInspeccion').select(Random_inspeccion)
                cy.wait(1000)
                cy.log(Random_inspeccion)
            }
            else if(Random_estado=="3: 13"){
                let inspeccion_Arr = ["Sitio de Inspección (PVI-001) Hidalgo"];
                let Random_inspeccion = inspeccion_Arr[Math.floor(Math.random()*inspeccion_Arr.length)]; 
                cy.get('#sitioInspeccion').select(Random_inspeccion)
                cy.wait(1000)
                cy.log(Random_inspeccion)
            }
            else if(Random_estado=="5: 32"){
                let inspeccion_Arr = ["NOMBRE_1"];
                let Random_inspeccion = inspeccion_Arr[Math.floor(Math.random()*inspeccion_Arr.length)]; 
                cy.get('#sitioInspeccion').select(Random_inspeccion)
                cy.wait(1000)
                cy.log(Random_inspeccion)
            }
            cy.xpath("//button[@class='btn btn-primary pull-right size'][contains(.,'Ingresar')]").should('be.visible').click({force: true})
            cy.wait(tiempo)


            //Inicia Registro diario
            cy.get('#id_menu_registro_diario').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.xpath("//a[@class='dropdown-toggle'][contains(.,'Comercial')]").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Mercancia Agricola
            cy.get('#selClasificacionMercanciaInfGeneral').select("Comercial")
            let tipo_m_Arr = ["Industrial","No Regulada","Regulada"];
            let Random_tipo_m = tipo_m_Arr[Math.floor(Math.random()*tipo_m_Arr.length)]; 
            cy.get('#selTipoMercanciaInfGeneral').select(Random_tipo_m)
            cy.get('#btnNoPresentarDoc').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Siguiente')]").should('be.visible').click({force: true})
            cy.wait(tiempo)

           

            //Datos de Registro
            //Estado
            let estado_2_Arr = ["Aguascalientes","Campeche","Chiapas"];
            let Random_estado_2 = estado_2_Arr[Math.floor(Math.random()*estado_2_Arr.length)]; 
            cy.get('#selEstadoOrigen').select(Random_estado_2)
            if(Random_estado_2=="Aguascalientes"){
                let municipio_Arr = ["Aguascalientes", "Asientos","Calvillo"];
                let Random_municipio = municipio_Arr[Math.floor(Math.random()*municipio_Arr.length)]; 
                cy.xpath("//select[contains(@id,'selMunicipioOrigen ')]").select(Random_municipio)
                cy.wait(1000)
                cy.log(Random_municipio)
            }
            else if(Random_estado_2=="Campeche"){
                let municipio_Arr = ["Calakmul", "Campeche","Carmen"];
                let Random_municipio = municipio_Arr[Math.floor(Math.random()*municipio_Arr.length)]; 
                cy.xpath("//select[contains(@id,'selMunicipioOrigen ')]").select(Random_municipio)
                cy.wait(1000)
                cy.log(Random_municipio)
            }
            else if(Random_estado_2=="Chiapas"){
                let municipio_Arr = ["Acacoyagua", "Acala","Aldama"];
                let Random_municipio = municipio_Arr[Math.floor(Math.random()*municipio_Arr.length)]; 
                cy.xpath("//select[contains(@id,'selMunicipioOrigen ')]").select(Random_municipio)
                cy.wait(1000)
                cy.log(Random_municipio)
            }
            //Empresa Origen
            let empresa_Arr = ["Empresa movilizadora 7", "Empresa movilizadora 8","Empresa movilizadora 9"];
            let Random_empresa = empresa_Arr[Math.floor(Math.random()*empresa_Arr.length)]; 
            cy.get("#selEmpresaOrigen").select(Random_empresa)
            cy.wait(1000)
            cy.log(Random_empresa)

            //Destino Estado
             let estado_3_Arr = ["Aguascalientes","Campeche","Chiapas"];
             let Random_estado_3 = estado_3_Arr[Math.floor(Math.random()*estado_3_Arr.length)]; 
             cy.get('#selEstadoDestino').select(Random_estado_3)
             if(Random_estado_3=="Aguascalientes"){
                 let municipio_2_Arr = ["Aguascalientes", "Asientos","Calvillo"];
                 let Random_municipio_2 = municipio_2_Arr[Math.floor(Math.random()*municipio_2_Arr.length)]; 
                 cy.get("#selMunicipioDestino").select(Random_municipio_2)
                 cy.wait(1000)
                 cy.log(Random_municipio_2)
             }
             else if(Random_estado_3=="Campeche"){
                 let municipio_2_Arr = ["Calakmul", "Campeche","Carmen"];
                 let Random_municipio_2 = municipio_2_Arr[Math.floor(Math.random()*municipio_2_Arr.length)]; 
                 cy.get("#selMunicipioDestino").select(Random_municipio_2)
                 cy.wait(1000)
                 cy.log(Random_municipio_2)
             }
             else if(Random_estado_3=="Chiapas"){
                 let municipio_2_Arr = ["Acacoyagua", "Acapetahua","Aldama"];
                 let Random_municipio_2 = municipio_2_Arr[Math.floor(Math.random()*municipio_2_Arr.length)]; 
                 cy.get("#selMunicipioDestino").select(Random_municipio_2)
                 cy.wait(1000)
                 cy.log(Random_municipio_2)
             }
             //Empresa Destino
             let empresa_2_Arr = ["Empresa movilizadora 7", "Empresa movilizadora 8","Empresa movilizadora 9"];
             let Random_empresa_2 = empresa_2_Arr[Math.floor(Math.random()*empresa_2_Arr.length)]; 
             cy.get("#selEmpresaDestino").select(Random_empresa_2)
             cy.wait(1000)
             cy.log(Random_empresa_2)

             //Tipo de vehiculo
             let vehiculo_Arr = ["Tipo de vehículo 2", "Tipo de vehículo 3"];
             let Random_vehiculo = vehiculo_Arr[Math.floor(Math.random()*vehiculo_Arr.length)]; 
             cy.get("#selTipoVehiculo").select(Random_vehiculo)

             //Placas
             let placas=Math.floor(Math.random() * 198989879);
             cy.get('#txtPlacas').should('be.visible').type('rtf-w'+placas)
             cy.wait(tiempo)

             let fecha1=new Date()
             let dia1  = (fecha1.getDate() + 0).toString().padStart(2, "0");
             let mes1  = (fecha1.getMonth() + 1).toString().padStart(2, "0");
             let anio1 = fecha1.getFullYear();                
             let fecha_uno=(anio1+"-"+mes1+"-"+dia1)
             cy.log(fecha_uno)             
             cy.get('#txtFechaInspeccion').should('be.visible').type(fecha_uno)
             //Hora
             cy.get('.ng-invalid > .form-group > .col-md-12 > #txtHoraInspeccion > .ant-time-picker-input').click() 
             cy.get('.ant-time-picker-panel-inner > .ant-time-picker-panel-combobox > .ant-time-picker-panel-select:nth-child(1) > ul > .ng-star-inserted:nth-child(11)').click() 
             cy.get('.ant-time-picker-panel-inner > .ant-time-picker-panel-combobox > .ant-time-picker-panel-select > ul > .ng-star-inserted:nth-child(31)').click() 
             cy.get('.pace-done > .cdk-overlay-container > .cdk-overlay-backdrop').click()

            


             //Grupo de Mercancias.
             let mercancia_Arr = ["Grupo Mercancia General"];
             let Random_mercancia = mercancia_Arr[Math.floor(Math.random()*mercancia_Arr.length)]; 
             cy.get("#selGrupoMercancia").select(Random_mercancia)
             cy.wait(1000)
             cy.log(Random_mercancia)
             //Mercancia
             let mercancia2_Arr = ["Mercancia General","Mercancia General 2","Mercancia General 1"];
             let Random_mercancia2 = mercancia2_Arr[Math.floor(Math.random()*mercancia2_Arr.length)]; 
             cy.get("#selMercancia").select(Random_mercancia2)
             cy.wait(1000)
             cy.log(Random_mercancia2)
            //  //Variedad Mercancia
            //  let variedad_mercancia_Arr = ["Variedad 1 M1","Variedad 3 M1"];
            //  let Random_variedad_mercancia = variedad_mercancia_Arr[Math.floor(Math.random()*variedad_mercancia_Arr.length)]; 
            //  cy.get("#selVariedadMercancia").select(Random_variedad_mercancia)
            //  cy.wait(1000)
             //Motivo de movilizacion
             let movilizacion_Arr = ["Motivo de movilizació 12","Motivo de movilizació 3","Motivo de movilizació 6"];
             let Random_movilizacion = movilizacion_Arr[Math.floor(Math.random()*movilizacion_Arr.length)]; 
             cy.get("#selMotivoMovilizacion").select(Random_movilizacion)
             cy.wait(1000)

             //cantidad
             let cantidad=Math.floor(Math.random() * 30+1);
             cy.get('#txtCantidad').should('be.visible').type(cantidad)
             cy.wait(tiempo)

            //  //Presentacion de Mercancia
            //  let presentacion_mercancia_Arr = ["3","4","5","6","7"];
            //  let Random_presentacion_mercancia = presentacion_mercancia_Arr[Math.floor(Math.random()*presentacion_mercancia_Arr.length)]; 
            //  cy.get("#selPresentacionMercancia").select(Random_presentacion_mercancia)
            //  cy.wait(1000)

             //Peso
             cy.get('#txtPeso').should('be.visible').type(cantidad+100)
             cy.wait(tiempo)

             //Unidad de Medida
             let unidad_medida_Arr = ["General","General 1","Unida Medida"];
             let Random_unidad_medida = unidad_medida_Arr[Math.floor(Math.random()*unidad_medida_Arr.length)]; 
             cy.get("#selUnidadMedida").select(Random_unidad_medida)
             cy.wait(1000)
             //Agregar


           
             cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Agregar')]").should('be.visible').click({force: true})
             cy.wait(tiempo)
             //Observacion
             cy.get('#txtObservacion').should('be.visible').type('Demo de Observación numero #'+cantidad+300)
             cy.wait(tiempo)
             //Validar datos
            //  cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Validar Datos')]").should('be.visible').click({force: true})
            //  cy.wait(2000)

             //Click siguiente 
             cy.xpath("(//button[@class='btn btn-primary size'][contains(.,'Siguiente')])[2]").should('be.visible').click({force: true})
             cy.wait(tiempo)

    
            

             //DOCUMENTACIÓN SOPORTE
             let soporte_Arr = ["Tipo de documentación soporte 1","Tipo de documentación soporte 6"];
             let Random_soporte = soporte_Arr[Math.floor(Math.random()*soporte_Arr.length)]; 
             cy.get("#selTipoDocumentoSoporte").select(Random_soporte)
             cy.wait(1000)
             //Folio
             let folio=Math.floor(Math.random() * 766709809);
             cy.get('#txtFolioDocSoporte').should('be.visible').type(folio)
             cy.wait(tiempo)
             //fecha
             cy.get('#txtFechaExpedicionDocSoporte').should('be.visible').type(fecha_uno)
             cy.wait(tiempo)



            
             //Estado soporte
             let estado_4_Arr = ["Aguascalientes","Campeche"];
             let Random_estado_4 = estado_4_Arr[Math.floor(Math.random()*estado_4_Arr.length)]; 
             cy.get('#selEstadoDocSoporte').select(Random_estado_4)
             if(Random_estado_4=="Aguascalientes"){
                 let municipio_3_Arr = ["Aguascalientes", "Asientos","El Llano"];
                 let Random_municipio_3 = municipio_3_Arr[Math.floor(Math.random()*municipio_3_Arr.length)]; 
                 cy.get("#selMunicipioDocSoporte").select(Random_municipio_3)
                 cy.wait(1000)
                 cy.log(Random_municipio_3)
             }
             else if(Random_estado_4=="Campeche"){
                 let municipio_3_Arr = ["Calkiní", "Campeche","Carmen"];
                 let Random_municipio_3 = municipio_3_Arr[Math.floor(Math.random()*municipio_3_Arr.length)]; 
                 cy.get("#selMunicipioDocSoporte").select(Random_municipio_3)
                 cy.wait(1000)
                 cy.log(Random_municipio_3)
             }
             //Agregar
             cy.get('#btnAgregarDocSoporte').should('be.visible').click({force: true})
             cy.wait(tiempo)

            
             //Observaciones
             cy.xpath("//textarea[@placeholder='Observaciones']").should('be.visible').type('Demo de la Observación dos numero #'+folio+200)
             cy.wait(tiempo)
             //Siguiente
             cy.xpath("//button[@class='btn btn-primary  size'][contains(.,'Siguiente')]").should('be.visible').click({force: true})
             cy.wait(tiempo)

            


             //VISTA PREVIA
             cy.xpath("//button[@href='#panel-01']").should('be.visible').click({force: true})
             cy.wait(1000)
             cy.xpath("//button[@href='#panel-01']").should('be.visible').click({force: true})
             cy.wait(1000)
             //POSITIVO
             cy.get('#radioC').should('be.visible').click({force: true})
             cy.wait(tiempo)
             //Resultado inpección
             let resultado_Arr = ["Resultado 1"];
             let Random_resultado = resultado_Arr[Math.floor(Math.random()*resultado_Arr.length)]; 
             cy.xpath("//select[@formcontrolname='resultadoVerificacionId']").select(Random_resultado)
             cy.wait(1000)

             //Finalizar
             cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Finalizar')]").should('be.visible').click({force: true})
             cy.wait(1500)
            
             //Cancelar
             cy.xpath("(//button[@class='btn btn-default'][contains(.,'Cancelar')])[3]").should('be.visible').click({force: true})
             cy.wait(1000)

            //Salir
            cy.get('#id_salir_sipvi').should('be.visible').click({force: true})
            cy.wait(1000)
  
             
           
        }
       

    }//final bloque master


      
    Master_Agricola_Negativo(t,np){
        let tiempo=t
        let folios
        //let animales=ani
        let numero_pruebas=np
        for(let num=1;num<=numero_pruebas;num++)
        {

            cy.visit('http://10.16.3.29:8007/login'),
            cy.title().should('eq','SIPVI | SENASICA')
            cy.wait(tiempo)

            
            //Login
            cy.get('#usuario').should('be.visible').type('user.1')
            cy.wait(tiempo)
            cy.get('#contrasenia').should('be.visible').type('sipvids')
            cy.wait(tiempo)
            cy.get("#id_ingresar_sipvi").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Seleccionar Estado al Inicio

            let estado_Arr = ["1: 1", "3: 13","5: 32"];
            let Random_estado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)]; 
            cy.get('#estado').select(Random_estado).should('have.value',Random_estado)
            cy.wait(1000)
            if(Random_estado=="1: 1"){
                let inspeccion_Arr = ["Sitios de Inspección 1", "Sitios de Inspección 2"];
                let Random_inspeccion = inspeccion_Arr[Math.floor(Math.random()*inspeccion_Arr.length)]; 
                cy.get('#sitioInspeccion').select(Random_inspeccion)
                cy.wait(1000)
                cy.log(Random_inspeccion)
            }
            else if(Random_estado=="3: 13"){
                let inspeccion_Arr = ["Sitio de Inspección (PVI-001) Hidalgo"];
                let Random_inspeccion = inspeccion_Arr[Math.floor(Math.random()*inspeccion_Arr.length)]; 
                cy.get('#sitioInspeccion').select(Random_inspeccion)
                cy.wait(1000)
                cy.log(Random_inspeccion)
            }
            else if(Random_estado=="5: 32"){
                let inspeccion_Arr = ["NOMBRE_1"];
                let Random_inspeccion = inspeccion_Arr[Math.floor(Math.random()*inspeccion_Arr.length)]; 
                cy.get('#sitioInspeccion').select(Random_inspeccion)
                cy.wait(1000)
                cy.log(Random_inspeccion)
            }
            cy.xpath("//button[@class='btn btn-primary pull-right size'][contains(.,'Ingresar')]").should('be.visible').click({force: true})
            cy.wait(tiempo)


            //Inicia Registro diario
            cy.get('#id_menu_registro_diario').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.xpath("//a[@class='dropdown-toggle'][contains(.,'Comercial')]").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Mercancia Agricola
            cy.get('#selClasificacionMercanciaInfGeneral').select("Agrícola")
            let tipo_m_Arr = ["Industrial","No Regulada","Regulada"];
            let Random_tipo_m = tipo_m_Arr[Math.floor(Math.random()*tipo_m_Arr.length)]; 
            cy.get('#selTipoMercanciaInfGeneral').select(Random_tipo_m)
            cy.get('#btnNoPresentarDoc').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Siguiente')]").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Datos de Registro
            //Estado
            let estado_2_Arr = ["Aguascalientes","Campeche","Chiapas"];
            let Random_estado_2 = estado_2_Arr[Math.floor(Math.random()*estado_2_Arr.length)]; 
            cy.get('#selEstadoOrigen').select(Random_estado_2)
            if(Random_estado_2=="Aguascalientes"){
                let municipio_Arr = ["Aguascalientes", "Asientos","Calvillo"];
                let Random_municipio = municipio_Arr[Math.floor(Math.random()*municipio_Arr.length)]; 
                cy.xpath("//select[contains(@id,'selMunicipioOrigen ')]").select(Random_municipio)
                cy.wait(1000)
                cy.log(Random_municipio)
            }
            else if(Random_estado_2=="Campeche"){
                let municipio_Arr = ["Calakmul", "Campeche","Carmen"];
                let Random_municipio = municipio_Arr[Math.floor(Math.random()*municipio_Arr.length)]; 
                cy.xpath("//select[contains(@id,'selMunicipioOrigen ')]").select(Random_municipio)
                cy.wait(1000)
                cy.log(Random_municipio)
            }
            else if(Random_estado_2=="Chiapas"){
                let municipio_Arr = ["Acacoyagua", "Acala","Aldama"];
                let Random_municipio = municipio_Arr[Math.floor(Math.random()*municipio_Arr.length)]; 
                cy.xpath("//select[contains(@id,'selMunicipioOrigen ')]").select(Random_municipio)
                cy.wait(1000)
                cy.log(Random_municipio)
            }
            //Empresa Origen
            let empresa_Arr = ["Empresa movilizadora 1", "Empresa movilizadora 2","Empresa movilizadora 5"];
            let Random_empresa = empresa_Arr[Math.floor(Math.random()*empresa_Arr.length)]; 
            cy.get("#selEmpresaOrigen").select(Random_empresa)
            cy.wait(1000)
            cy.log(Random_empresa)

            //Destino Estado
             let estado_3_Arr = ["Aguascalientes","Campeche","Chiapas"];
             let Random_estado_3 = estado_3_Arr[Math.floor(Math.random()*estado_3_Arr.length)]; 
             cy.get('#selEstadoDestino').select(Random_estado_3)
             if(Random_estado_3=="Aguascalientes"){
                 let municipio_2_Arr = ["Aguascalientes", "Asientos","Calvillo"];
                 let Random_municipio_2 = municipio_2_Arr[Math.floor(Math.random()*municipio_2_Arr.length)]; 
                 cy.get("#selMunicipioDestino").select(Random_municipio_2)
                 cy.wait(1000)
                 cy.log(Random_municipio_2)
             }
             else if(Random_estado_3=="Campeche"){
                 let municipio_2_Arr = ["Calakmul", "Campeche","Carmen"];
                 let Random_municipio_2 = municipio_2_Arr[Math.floor(Math.random()*municipio_2_Arr.length)]; 
                 cy.get("#selMunicipioDestino").select(Random_municipio_2)
                 cy.wait(1000)
                 cy.log(Random_municipio_2)
             }
             else if(Random_estado_3=="Chiapas"){
                 let municipio_2_Arr = ["Acacoyagua", "Acapetahua","Aldama"];
                 let Random_municipio_2 = municipio_2_Arr[Math.floor(Math.random()*municipio_2_Arr.length)]; 
                 cy.get("#selMunicipioDestino").select(Random_municipio_2)
                 cy.wait(1000)
                 cy.log(Random_municipio_2)
             }
             //Empresa Destino
             let empresa_2_Arr = ["Empresa movilizadora 1", "Empresa movilizadora 2","Empresa movilizadora 5"];
             let Random_empresa_2 = empresa_2_Arr[Math.floor(Math.random()*empresa_2_Arr.length)]; 
             cy.get("#selEmpresaDestino").select(Random_empresa_2)
             cy.wait(1000)
             cy.log(Random_empresa_2)

             //Tipo de vehiculo
             let vehiculo_Arr = ["Tipo de vehículo 2", "Tipo de vehículo 3"];
             let Random_vehiculo = vehiculo_Arr[Math.floor(Math.random()*vehiculo_Arr.length)]; 
             cy.get("#selTipoVehiculo").select(Random_vehiculo)

             //Placas
             let placas=Math.floor(Math.random() * 198989879);
             cy.get('#txtPlacas').should('be.visible').type('rtf-w'+placas)
             cy.wait(tiempo)

             let fecha1=new Date()
             let dia1  = (fecha1.getDate() + 0).toString().padStart(2, "0");
             let mes1  = (fecha1.getMonth() + 1).toString().padStart(2, "0");
             let anio1 = fecha1.getFullYear();                
             let fecha_uno=(anio1+"-"+mes1+"-"+dia1)
             cy.log(fecha_uno)             
             cy.get('#txtFechaInspeccion').should('be.visible').type(fecha_uno)
             //Hora
             cy.get('#form_1 > .form-group > .col-md-12 > #txtHoraInspeccion > .ant-time-picker-input').click() 
             cy.get('.ant-time-picker-panel-inner > .ant-time-picker-panel-combobox > .ant-time-picker-panel-select:nth-child(1) > ul > .ng-star-inserted:nth-child(12)').click() 
             cy.get('.ant-time-picker-panel-inner > .ant-time-picker-panel-combobox > .ant-time-picker-panel-select > ul > .ng-star-inserted:nth-child(31)').click() 
             cy.get('.pace-done > .cdk-overlay-container > .cdk-overlay-backdrop').click()


             //Grupo de Mercancias.
             let mercancia_Arr = ["Grupo de mercancía 1"];
             let Random_mercancia = mercancia_Arr[Math.floor(Math.random()*mercancia_Arr.length)]; 
             cy.get("#selGrupoMercancia").select(Random_mercancia)
             cy.wait(1000)
             cy.log(Random_mercancia)
             //Mercancia
             let mercancia2_Arr = ["Mercancía 1"];
             let Random_mercancia2 = mercancia2_Arr[Math.floor(Math.random()*mercancia2_Arr.length)]; 
             cy.get("#selMercancia").select(Random_mercancia2)
             cy.wait(1000)
             cy.log(Random_mercancia2)
             //Variedad Mercancia
             let variedad_mercancia_Arr = ["Variedad 1 M1","Variedad 3 M1"];
             let Random_variedad_mercancia = variedad_mercancia_Arr[Math.floor(Math.random()*variedad_mercancia_Arr.length)]; 
             cy.get("#selVariedadMercancia").select(Random_variedad_mercancia)
             cy.wait(1000)
             //Motivo de movilizacion
             let movilizacion_Arr = ["Motivo de movilizació 1","Motivo de movilizació 10","Motivo de movilizació 13"];
             let Random_movilizacion = movilizacion_Arr[Math.floor(Math.random()*movilizacion_Arr.length)]; 
             cy.get("#selMotivoMovilizacion").select(Random_movilizacion)
             cy.wait(1000)

             //cantidad
             let cantidad=Math.floor(Math.random() * 30);
             cy.get('#txtCantidad').should('be.visible').type(cantidad)
             cy.wait(tiempo)

             //Presentacion de Mercancia
             let presentacion_mercancia_Arr = ["3","4","5","6","7"];
             let Random_presentacion_mercancia = presentacion_mercancia_Arr[Math.floor(Math.random()*presentacion_mercancia_Arr.length)]; 
             cy.get("#selPresentacionMercancia").select(Random_presentacion_mercancia)
             cy.wait(1000)

             //Peso
             cy.get('#txtPeso').should('be.visible').type(cantidad+100)
             cy.wait(tiempo)

             //Unidad de Medida
             let unidad_medida_Arr = ["Unidad medida 1","Unidad medida 13","Unidad medida 15"];
             let Random_unidad_medida = unidad_medida_Arr[Math.floor(Math.random()*unidad_medida_Arr.length)]; 
             cy.get("#selUnidadMedida").select(Random_unidad_medida)
             cy.wait(1000)
             //Agregar
             cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Agregar')]").should('be.visible').click({force: true})
             cy.wait(tiempo)
             //Observacion
             cy.get('#txtObservacion').should('be.visible').type('Demo de Observación numero #'+cantidad+300)
             cy.wait(tiempo)
             //Validar datos
             cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Validar Datos')]").should('be.visible').click({force: true})
             cy.wait(2000)

             //Click siguiente 
             cy.xpath("(//button[@class='btn btn-primary size'][contains(.,'Siguiente')])[2]").should('be.visible').click({force: true})
             cy.wait(tiempo)



             //DOCUMENTACIÓN SOPORTE
             let soporte_Arr = ["Tipo de documentación soporte 2","Tipo de documentación soporte 4"];
             let Random_soporte = soporte_Arr[Math.floor(Math.random()*soporte_Arr.length)]; 
             cy.get("#selTipoDocumentoSoporte").select(Random_soporte)
             cy.wait(1000)
             //Folio
             let folio=Math.floor(Math.random() * 766709809);
             cy.get('#txtFolioDocSoporte').should('be.visible').type(folio)
             cy.wait(tiempo)
             //Estado soporte
             let estado_4_Arr = ["Aguascalientes","Campeche"];
             let Random_estado_4 = estado_4_Arr[Math.floor(Math.random()*estado_4_Arr.length)]; 
             cy.get('#selEstadoDocSoporte').select(Random_estado_4)
             if(Random_estado_4=="Aguascalientes"){
                 let municipio_3_Arr = ["Aguascalientes", "Asientos","El Llano"];
                 let Random_municipio_3 = municipio_3_Arr[Math.floor(Math.random()*municipio_3_Arr.length)]; 
                 cy.get("#selMunicipioDocSoporte").select(Random_municipio_3)
                 cy.wait(1000)
                 cy.log(Random_municipio_3)
             }
             else if(Random_estado_4=="Campeche"){
                 let municipio_3_Arr = ["Calkiní", "Campeche","Carmen"];
                 let Random_municipio_3 = municipio_3_Arr[Math.floor(Math.random()*municipio_3_Arr.length)]; 
                 cy.get("#selMunicipioDocSoporte").select(Random_municipio_3)
                 cy.wait(1000)
                 cy.log(Random_municipio_3)
             }
             //fechas
             cy.get('#txtFechaExpedicionDocSoporte').should('be.visible').type(fecha_uno)
             cy.wait(tiempo)
             let fecha_2V=new Date()
             let dia_V  = (fecha_2V.getDate() + 5).toString().padStart(2, "0");            
             let mes_2v  = (fecha_2V.getMonth() + 0).toString().padStart(2, "0");
             let anio_2 = fecha_2V.getFullYear();                
             let fecha_dosV=(anio_2+"-"+mes_2v+"-"+dia_V)
             cy.get('#txtFechaVigenciaDocSoporte').should('be.visible')
             cy.get('#txtFechaVigenciaDocSoporte').should('be.visible').type("2021-12-19")
             cy.wait(tiempo)
             //Clave expendidor
             cy.get('#chkClaveExpedidor').should('be.visible').click({force: true})
             cy.wait(tiempo)
             //Agregar
             cy.get('#btnAgregarDocSoporte').should('be.visible').click({force: true})
             cy.wait(tiempo)
             //Observaciones
             cy.xpath("//textarea[@placeholder='Observaciones']").should('be.visible').type('Demo de la Observación dos numero #'+folio+200)
             cy.wait(tiempo)
             //Siguiente
             cy.xpath("//button[@class='btn btn-primary  size'][contains(.,'Siguiente')]").should('be.visible').click({force: true})
             cy.wait(tiempo)




             //VISTA PREVIA
             cy.xpath("//button[@href='#panel-01']").should('be.visible').click({force: true})
             cy.wait(1000)
             cy.xpath("//button[@href='#panel-01']").should('be.visible').click({force: true})
             cy.wait(1000)
             //POSITIVO
             cy.get('#radioC').should('be.visible').click({force: true})
             cy.wait(tiempo)
             //NEGATIVO IMPORTANTE
             cy.get('#radioNC').should('be.visible').click({force: true})
             cy.wait(tiempo)

             //Resultado inpección
             let resultado_Arr = ["Resultado de la verificación e inspección Negativo-10", "Resultado de la verificación e inspección Negativo-11","Resultado de la verificación e inspección Negativo-12"];
             let Random_resultado = resultado_Arr[Math.floor(Math.random()*resultado_Arr.length)]; 
             cy.xpath("//select[@formcontrolname='resultadoVerificacionId']").select(Random_resultado)
             cy.wait(1000)

            //Acción resultante
            let accion_Arr = ["Acción resultante 1", "Acción resultante 10","Acción resultante 11"];
            let Random_accion = accion_Arr[Math.floor(Math.random()*accion_Arr.length)]; 
            cy.xpath("//select[contains(@formcontrolname,'accionResultanteId')]").select(Random_accion)
            cy.wait(1000)

        
            //Finalizar
            cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Finalizar')]").should('be.visible').click({force: true})
            cy.wait(1500)

            //Cancelar
            cy.xpath("(//button[@class='btn btn-default'][contains(.,'Cancelar')])[3]").should('be.visible').click({force: true})
            cy.wait(tiempo)


            //COMIENZA ACTA DE CIRCUSTANCIAS

            cy.xpath("//a[contains(.,'Actas Circunstanciadas')]").click({force: true})
            cy.wait(tiempo)
            //Ley Federal
            let ley_Arr = ["Sanidad Animal", "Sanidad Vegetal"];
            let Random_ley = ley_Arr[Math.floor(Math.random()*ley_Arr.length)]; 
            cy.get("#id_conductor_leyFederal").select(Random_ley)
            cy.wait(1000)
            //sin datos
            cy.get("#id_conductor_sinDatos").click({force: true})
            cy.wait(tiempo)
            //sin identificacion
            cy.get("#id_identificacionRadio_No").click({force: true})
            cy.wait(tiempo)
            //Guardar
            cy.xpath("//button[@class='btn btn-primary mr-1'][contains(.,'Guardar')]").should('be.visible').click({force: true})
            cy.wait(1500)
            //siguiente
            cy.xpath("//button[@class='btn btn-danger'][contains(.,'Siguiente')]").should('be.visible').click({force: true})
            cy.wait(1500)

            //DATOS DEL VEHICULO
            let carro_Arr = ["Ford", "Nisan","Mercedes"];
            let Random_carro = carro_Arr[Math.floor(Math.random()*carro_Arr.length)]; 
            cy.get('#id_nombre').should('be.visible').type(Random_carro)
            cy.wait(tiempo)
            //tipo
            let tipo_v_Arr = ["Tipo de vehículo 2", "Tipo de vehículo 3"];
            let Random_tipo_v = tipo_v_Arr[Math.floor(Math.random()*tipo_v_Arr.length)]; 
            cy.get("#idVehiculo").select(Random_tipo_v)
            cy.wait(1000)
            //modelo
            cy.get('#id_modelo').should('be.visible').type('Modelo#'+cantidad+99768657)
            cy.wait(tiempo)
            //placas
            cy.get('#id_placas').should('be.visible').type('Placas#'+cantidad+8989789789)
            cy.wait(tiempo)
            //estado
            let estado_per_Arr = ["Aguascalientes","Campeche"];
            let Random_estado_per = estado_per_Arr[Math.floor(Math.random()*estado_per_Arr.length)]; 
            cy.get('#idEntidadVeh').select(Random_estado_per)

            //DATOS DEL PROPIETARIO
            //Nombre
            let can=Math.floor(Math.random() * 198989879);
            cy.get('#id_nombreProp').should('be.visible').type('Propietario'+can+3434)
            cy.wait(tiempo)
            //apellido
            cy.get('#id_apellidoPaterno').should('be.visible').type('Apellido'+can+567567)
            cy.wait(tiempo)
            //Materno
            cy.get('#id_apellidoMaterno').should('be.visible').type('Materno'+can+4234)
            cy.wait(tiempo)
            //Domicilio
            //estado
            let estado_per2_Arr = ["Aguascalientes"];
            let Random_estado_per2 = estado_per2_Arr[Math.floor(Math.random()*estado_per2_Arr.length)]; 
            cy.get('#id_estado').select(Random_estado_per2)
            //Municipio
                if(Random_estado_per2=="Aguascalientes"){
                    let municipio_per_Arr = ["Asientos"];
                    let Random_municipio_per = municipio_per_Arr[Math.floor(Math.random()*municipio_per_Arr.length)]; 
                    cy.get("#id_municipio").select(Random_municipio_per)
                    cy.wait(1000)                   
                    if(Random_municipio_per=="Asientos"){
                        let municipio_loc_Arr = ["3 Valles","Alvarado"];
                        let Random_municipio_loc = municipio_loc_Arr[Math.floor(Math.random()*municipio_loc_Arr.length)]; 
                        cy.get("#id_localidad").select(Random_municipio_loc)
                        cy.wait(1000)
                    }
                }
              
            //Calle
            cy.get('#id_calle').should('be.visible').type('Cale numero'+can+567867)
            cy.wait(tiempo)
            //numero exterios
            cy.get('#id_numeroExterior').should('be.visible').type(cantidad)
            cy.wait(tiempo)
            //Num interior
            cy.get('#id_numeroInterior').should('be.visible').type(cantidad+30)
            cy.wait(tiempo)
            //Guardar
            cy.xpath("//button[contains(@id,'id_btn_guardar')]").should('be.visible').click({force: true})
            cy.wait(tiempo)
            //Siguiente
            cy.xpath("//button[contains(@id,'id_btn_siguiente')]").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Paso 3 testigo
            cy.get('#id_testigo_nombre').should('be.visible').type('Nombre'+can)
            cy.wait(tiempo)
            cy.get('#id_testigo_apellidoPaterno').should('be.visible').type('Apellido Paterno'+can+10)
            cy.wait(tiempo)
            //Materno
            cy.get('#id_testigo_apellidoMaterno').should('be.visible').type('Materno'+can+89)
            cy.wait(tiempo)
            //Estado civil
            let estado_civil_Arr = ["Soltero","Casado","Divorciado"];
            let Random_estado_civil = estado_civil_Arr[Math.floor(Math.random()*estado_civil_Arr.length)]; 
            cy.get("#id_testigo_estadoCivil").select(Random_estado_civil)
            cy.wait(1000)
            //Domicilio
            //estado
            let estado_per3_Arr = ["Aguascalientes"];
            let Random_estado_per3 = estado_per3_Arr[Math.floor(Math.random()*estado_per3_Arr.length)]; 
            cy.get('#id_estado').select(Random_estado_per3)
            //Municipio
                if(Random_estado_per3=="Aguascalientes"){
                    let municipio_per3_Arr = ["Asientos"];
                    let Random_municipio_per3 = municipio_per3_Arr[Math.floor(Math.random()*municipio_per3_Arr.length)]; 
                    cy.get("#id_municipio").select(Random_municipio_per3)
                    cy.wait(1000)                   
                    if(Random_municipio_per3=="Asientos"){
                        let municipio_loc3_Arr = ["3 Valles","Alvarado"];
                        let Random_municipio_loc3 = municipio_loc3_Arr[Math.floor(Math.random()*municipio_loc3_Arr.length)]; 
                        cy.get("#id_localidad").select(Random_municipio_loc3)
                        cy.wait(1000)
                    }
                }
            //calle
            cy.get('#id_calle').should('be.visible').type('Calle#'+can)
            cy.wait(tiempo)
            //numero exterios
            cy.get('#id_numeroExterior').should('be.visible').type(cantidad)
            cy.wait(tiempo)
            //Num interior
            cy.get('#id_numeroInterior').should('be.visible').type(cantidad+30)
            //No
            cy.xpath("//input[contains(@id,'id_identificacionRadio_No')]").click({force: true})
            cy.wait(tiempo)
            //Guardad
            cy.xpath("//button[contains(@id,'id_btn_guardar')]").should('be.visible').click({force: true})
            cy.wait(1200)
            //Siguiente
            cy.xpath('//*[@id="id_btn_siguiente"]').should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Paso 4 testigo 2
             //Paso 3 testigo
             cy.get('#id_testigo_nombre').should('be.visible').type('Nombre'+can)
             cy.wait(tiempo)
             cy.get('#id_testigo_apellidoPaterno').should('be.visible').type('Apellido Paterno'+can+10)
             cy.wait(tiempo)
             //Materno
             cy.get('#id_testigo_apellidoMaterno').should('be.visible').type('Materno'+can+89)
             cy.wait(tiempo)
             //Estado civil
             let estado_civil2_Arr = ["Soltero","Casado","Divorciado"];
             let Random_estado_civil2 = estado_civil2_Arr[Math.floor(Math.random()*estado_civil2_Arr.length)]; 
             cy.get("#id_testigo_estadoCivil").select(Random_estado_civil2)
             cy.wait(1000)
             //Domicilio
            //estado
             let estado_per4_Arr = ["Aguascalientes"];
             let Random_estado_per4 = estado_per4_Arr[Math.floor(Math.random()*estado_per4_Arr.length)]; 
             cy.get('#id_estado').select(Random_estado_per4)
             //Municipio
                if(Random_estado_per4=="Aguascalientes"){
                    let municipio_per4_Arr = ["Asientos"];
                    let Random_municipio_per4 = municipio_per4_Arr[Math.floor(Math.random()*municipio_per4_Arr.length)]; 
                    cy.get("#id_municipio").select(Random_municipio_per4)
                    cy.wait(1000)                   
                    if(Random_municipio_per4=="Asientos"){
                        let municipio_loc4_Arr = ["3 Valles","Alvarado"];
                        let Random_municipio_loc4 = municipio_loc4_Arr[Math.floor(Math.random()*municipio_loc4_Arr.length)]; 
                        cy.get("#id_localidad").select(Random_municipio_loc4)
                        cy.wait(1000)
                    }
                }
            
             cy.wait(tiempo)
             //calle
             cy.get('#id_calle').should('be.visible').type('Calle#'+can)
             cy.wait(tiempo)
             //numero exterios
             cy.get('#id_numeroExterior').should('be.visible').type(cantidad)
             cy.wait(tiempo)
             //Num interior
             cy.get('#id_numeroInterior').should('be.visible').type(cantidad+30)
             //No
             cy.xpath("//input[contains(@id,'id_identificacionRadio_No')]").click({force: true})
             cy.wait(tiempo)
             //Guardad
             cy.xpath("//button[contains(@id,'id_btn_guardar')]").should('be.visible').click({force: true})
             cy.wait(2000)
             //Siguiente
             cy.xpath('//*[@id="id_btn_siguiente"]').should('be.visible').click({force: true})
             cy.wait(tiempo)
             

             //Paso 5 hechos
             cy.get('#id_hechos').should('be.visible').type('Demo del contenido de los hechos, esto es un demo del texto#'+can+2342343)
             cy.wait(tiempo)
             //Manifesto
             cy.get('#id_manifiesto').should('be.visible').type('Demo del contenido de Manifesto #'+can +676554)
             cy.wait(tiempo)
             //Guardar
             cy.xpath("//button[contains(@id,'id_btn_guardar')]").should('be.visible').click({force: true})
             cy.wait(2000)
             //Siguiente
             cy.xpath("//button[contains(@id,'id_btn_siguiente')]").should('be.visible').click({force: true})
             cy.wait(tiempo)

             //Documentos Anexos
             //cy.get("#idActaDocumento").select("Fotos soporte")
             //imagen
            //  const ruta='img2.jpg'
            //  const ruta2='uno.jpg'
            //  cy.get('#id_file_modal').attachFile(ruta)
            //  cy.wait(2000)
            //  cy.get('#id_file_modal').attachFile(ruta2)
            //  cy.wait(3000)
             //Agregar
            //  cy.get('#id_btn_agregar').should('be.visible').click({force: true})
            //  cy.wait(tiempo)
             
             //cy.wait(9999999)
             cy.wait(2000)
             //Guardar
             cy.get('#id_btn_guardar').should('be.visible').click({force: true})
             cy.wait(tiempo)
             //Liberar
             cy.get('#id_btn_liberarActa').should('be.visible').click({force: true})
             cy.wait(tiempo)
             //Aceptar
             cy.xpath('//*[@id="modalActa"]/div/div/div[3]/button[2]').click({force: true})
             cy.wait(1000)
             cy.xpath('//*[@id="modalActa"]/div/div/div[3]/button[2]').click({force: true})
             cy.wait(1000)

             //Salir
             cy.get('#id_salir_sipvi').should('be.visible').click({force: true})
             cy.wait(1000)


        }
       

    }//final bloque master




    Master_Comercial_Negativo(t,np){
        let tiempo=t
        let folios
        //let animales=ani
        let numero_pruebas=np
        for(let num=1;num<=numero_pruebas;num++)
        {

            cy.visit('http://10.16.3.29:8007/login'),
            cy.title().should('eq','SIPVI | SENASICA')
            cy.wait(tiempo)

            
            //Login
            cy.get('#usuario').should('be.visible').type('user.1')
            cy.wait(tiempo)
            cy.get('#contrasenia').should('be.visible').type('sipvids')
            cy.wait(tiempo)
            cy.get("#id_ingresar_sipvi").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Seleccionar Estado al Inicio

            let estado_Arr = ["1: 1", "3: 13","5: 32"];
            let Random_estado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)]; 
            cy.get('#estado').select(Random_estado).should('have.value',Random_estado)
            cy.wait(1000)
            if(Random_estado=="1: 1"){
                let inspeccion_Arr = ["Sitios de Inspección 1", "Sitios de Inspección 2"];
                let Random_inspeccion = inspeccion_Arr[Math.floor(Math.random()*inspeccion_Arr.length)]; 
                cy.get('#sitioInspeccion').select(Random_inspeccion)
                cy.wait(1000)
                cy.log(Random_inspeccion)
            }
            else if(Random_estado=="3: 13"){
                let inspeccion_Arr = ["Sitio de Inspección (PVI-001) Hidalgo"];
                let Random_inspeccion = inspeccion_Arr[Math.floor(Math.random()*inspeccion_Arr.length)]; 
                cy.get('#sitioInspeccion').select(Random_inspeccion)
                cy.wait(1000)
                cy.log(Random_inspeccion)
            }
            else if(Random_estado=="5: 32"){
                let inspeccion_Arr = ["NOMBRE_1"];
                let Random_inspeccion = inspeccion_Arr[Math.floor(Math.random()*inspeccion_Arr.length)]; 
                cy.get('#sitioInspeccion').select(Random_inspeccion)
                cy.wait(1000)
                cy.log(Random_inspeccion)
            }
            cy.xpath("//button[@class='btn btn-primary pull-right size'][contains(.,'Ingresar')]").should('be.visible').click({force: true})
            cy.wait(tiempo)


            //Inicia Registro diario
            cy.get('#id_menu_registro_diario').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.xpath("//a[@class='dropdown-toggle'][contains(.,'Comercial')]").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Mercancia Agricola
            cy.get('#selClasificacionMercanciaInfGeneral').select("Comercial")
            let tipo_m_Arr = ["Industrial","No Regulada","Regulada"];
            let Random_tipo_m = tipo_m_Arr[Math.floor(Math.random()*tipo_m_Arr.length)]; 
            cy.get('#selTipoMercanciaInfGeneral').select(Random_tipo_m)
            cy.get('#btnNoPresentarDoc').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Siguiente')]").should('be.visible').click({force: true})
            cy.wait(tiempo)

           

            //Datos de Registro
            //Estado
            let estado_2_Arr = ["Aguascalientes","Campeche","Chiapas"];
            let Random_estado_2 = estado_2_Arr[Math.floor(Math.random()*estado_2_Arr.length)]; 
            cy.get('#selEstadoOrigen').select(Random_estado_2)
            if(Random_estado_2=="Aguascalientes"){
                let municipio_Arr = ["Aguascalientes", "Asientos","Calvillo"];
                let Random_municipio = municipio_Arr[Math.floor(Math.random()*municipio_Arr.length)]; 
                cy.xpath("//select[contains(@id,'selMunicipioOrigen ')]").select(Random_municipio)
                cy.wait(1000)
                cy.log(Random_municipio)
            }
            else if(Random_estado_2=="Campeche"){
                let municipio_Arr = ["Calakmul", "Campeche","Carmen"];
                let Random_municipio = municipio_Arr[Math.floor(Math.random()*municipio_Arr.length)]; 
                cy.xpath("//select[contains(@id,'selMunicipioOrigen ')]").select(Random_municipio)
                cy.wait(1000)
                cy.log(Random_municipio)
            }
            else if(Random_estado_2=="Chiapas"){
                let municipio_Arr = ["Acacoyagua", "Acala","Aldama"];
                let Random_municipio = municipio_Arr[Math.floor(Math.random()*municipio_Arr.length)]; 
                cy.xpath("//select[contains(@id,'selMunicipioOrigen ')]").select(Random_municipio)
                cy.wait(1000)
                cy.log(Random_municipio)
            }
            //Empresa Origen
            let empresa_Arr = ["Empresa movilizadora 7", "Empresa movilizadora 8","Empresa movilizadora 9"];
            let Random_empresa = empresa_Arr[Math.floor(Math.random()*empresa_Arr.length)]; 
            cy.get("#selEmpresaOrigen").select(Random_empresa)
            cy.wait(1000)
            cy.log(Random_empresa)

            //Destino Estado
             let estado_3_Arr = ["Aguascalientes","Campeche","Chiapas"];
             let Random_estado_3 = estado_3_Arr[Math.floor(Math.random()*estado_3_Arr.length)]; 
             cy.get('#selEstadoDestino').select(Random_estado_3)
             if(Random_estado_3=="Aguascalientes"){
                 let municipio_2_Arr = ["Aguascalientes", "Asientos","Calvillo"];
                 let Random_municipio_2 = municipio_2_Arr[Math.floor(Math.random()*municipio_2_Arr.length)]; 
                 cy.get("#selMunicipioDestino").select(Random_municipio_2)
                 cy.wait(1000)
                 cy.log(Random_municipio_2)
             }
             else if(Random_estado_3=="Campeche"){
                 let municipio_2_Arr = ["Calakmul", "Campeche","Carmen"];
                 let Random_municipio_2 = municipio_2_Arr[Math.floor(Math.random()*municipio_2_Arr.length)]; 
                 cy.get("#selMunicipioDestino").select(Random_municipio_2)
                 cy.wait(1000)
                 cy.log(Random_municipio_2)
             }
             else if(Random_estado_3=="Chiapas"){
                 let municipio_2_Arr = ["Acacoyagua", "Acapetahua","Aldama"];
                 let Random_municipio_2 = municipio_2_Arr[Math.floor(Math.random()*municipio_2_Arr.length)]; 
                 cy.get("#selMunicipioDestino").select(Random_municipio_2)
                 cy.wait(1000)
                 cy.log(Random_municipio_2)
             }
             //Empresa Destino
             let empresa_2_Arr = ["Empresa movilizadora 7", "Empresa movilizadora 8","Empresa movilizadora 9"];
             let Random_empresa_2 = empresa_2_Arr[Math.floor(Math.random()*empresa_2_Arr.length)]; 
             cy.get("#selEmpresaDestino").select(Random_empresa_2)
             cy.wait(1000)
             cy.log(Random_empresa_2)

             //Tipo de vehiculo
             let vehiculo_Arr = ["Tipo de vehículo 2", "Tipo de vehículo 3"];
             let Random_vehiculo = vehiculo_Arr[Math.floor(Math.random()*vehiculo_Arr.length)]; 
             cy.get("#selTipoVehiculo").select(Random_vehiculo)

             //Placas
             let placas=Math.floor(Math.random() * 198989879);
             cy.get('#txtPlacas').should('be.visible').type('rtf-w'+placas)
             cy.wait(tiempo)

             let fecha1=new Date()
             let dia1  = (fecha1.getDate() + 0).toString().padStart(2, "0");
             let mes1  = (fecha1.getMonth() + 1).toString().padStart(2, "0");
             let anio1 = fecha1.getFullYear();                
             let fecha_uno=(anio1+"-"+mes1+"-"+dia1)
             cy.log(fecha_uno)             
             cy.get('#txtFechaInspeccion').should('be.visible').type(fecha_uno)
             //Hora
             cy.get('.ng-invalid > .form-group > .col-md-12 > #txtHoraInspeccion > .ant-time-picker-input').click() 
             cy.get('.ant-time-picker-panel-inner > .ant-time-picker-panel-combobox > .ant-time-picker-panel-select:nth-child(1) > ul > .ng-star-inserted:nth-child(11)').click() 
             cy.get('.ant-time-picker-panel-inner > .ant-time-picker-panel-combobox > .ant-time-picker-panel-select > ul > .ng-star-inserted:nth-child(31)').click() 
             cy.get('.pace-done > .cdk-overlay-container > .cdk-overlay-backdrop').click()

            


             //Grupo de Mercancias.
             let mercancia_Arr = ["Grupo Mercancia General"];
             let Random_mercancia = mercancia_Arr[Math.floor(Math.random()*mercancia_Arr.length)]; 
             cy.get("#selGrupoMercancia").select(Random_mercancia)
             cy.wait(1000)
             cy.log(Random_mercancia)
             //Mercancia
             let mercancia2_Arr = ["Mercancia General","Mercancia General 2","Mercancia General 1"];
             let Random_mercancia2 = mercancia2_Arr[Math.floor(Math.random()*mercancia2_Arr.length)]; 
             cy.get("#selMercancia").select(Random_mercancia2)
             cy.wait(1000)
             cy.log(Random_mercancia2)
            //  //Variedad Mercancia
            //  let variedad_mercancia_Arr = ["Variedad 1 M1","Variedad 3 M1"];
            //  let Random_variedad_mercancia = variedad_mercancia_Arr[Math.floor(Math.random()*variedad_mercancia_Arr.length)]; 
            //  cy.get("#selVariedadMercancia").select(Random_variedad_mercancia)
            //  cy.wait(1000)
             //Motivo de movilizacion
             let movilizacion_Arr = ["Motivo de movilizació 12","Motivo de movilizació 3","Motivo de movilizació 6"];
             let Random_movilizacion = movilizacion_Arr[Math.floor(Math.random()*movilizacion_Arr.length)]; 
             cy.get("#selMotivoMovilizacion").select(Random_movilizacion)
             cy.wait(1000)

             //cantidad
             let cantidad=Math.floor(Math.random() * 30+1);
             cy.get('#txtCantidad').should('be.visible').type(cantidad)
             cy.wait(tiempo)

            //  //Presentacion de Mercancia
            //  let presentacion_mercancia_Arr = ["3","4","5","6","7"];
            //  let Random_presentacion_mercancia = presentacion_mercancia_Arr[Math.floor(Math.random()*presentacion_mercancia_Arr.length)]; 
            //  cy.get("#selPresentacionMercancia").select(Random_presentacion_mercancia)
            //  cy.wait(1000)

             //Peso
             cy.get('#txtPeso').should('be.visible').type(cantidad+100)
             cy.wait(tiempo)

             //Unidad de Medida
             let unidad_medida_Arr = ["General","General 1","Unida Medida"];
             let Random_unidad_medida = unidad_medida_Arr[Math.floor(Math.random()*unidad_medida_Arr.length)]; 
             cy.get("#selUnidadMedida").select(Random_unidad_medida)
             cy.wait(1000)
             //Agregar


           
             cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Agregar')]").should('be.visible').click({force: true})
             cy.wait(tiempo)
             //Observacion
             cy.get('#txtObservacion').should('be.visible').type('Demo de Observación numero #'+cantidad+300)
             cy.wait(tiempo)
             //Validar datos
            //  cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Validar Datos')]").should('be.visible').click({force: true})
            //  cy.wait(2000)

             //Click siguiente 
             cy.xpath("(//button[@class='btn btn-primary size'][contains(.,'Siguiente')])[2]").should('be.visible').click({force: true})
             cy.wait(tiempo)

    
            

             //DOCUMENTACIÓN SOPORTE
             let soporte_Arr = ["Tipo de documentación soporte 1","Tipo de documentación soporte 6"];
             let Random_soporte = soporte_Arr[Math.floor(Math.random()*soporte_Arr.length)]; 
             cy.get("#selTipoDocumentoSoporte").select(Random_soporte)
             cy.wait(1000)
             //Folio
             let folio=Math.floor(Math.random() * 766709809);
             cy.get('#txtFolioDocSoporte').should('be.visible').type(folio)
             cy.wait(tiempo)
             //fecha
             cy.get('#txtFechaExpedicionDocSoporte').should('be.visible').type(fecha_uno)
             cy.wait(tiempo)



            
             //Estado soporte
             let estado_4_Arr = ["Aguascalientes","Campeche"];
             let Random_estado_4 = estado_4_Arr[Math.floor(Math.random()*estado_4_Arr.length)]; 
             cy.get('#selEstadoDocSoporte').select(Random_estado_4)
             if(Random_estado_4=="Aguascalientes"){
                 let municipio_3_Arr = ["Aguascalientes", "Asientos","El Llano"];
                 let Random_municipio_3 = municipio_3_Arr[Math.floor(Math.random()*municipio_3_Arr.length)]; 
                 cy.get("#selMunicipioDocSoporte").select(Random_municipio_3)
                 cy.wait(1000)
                 cy.log(Random_municipio_3)
             }
             else if(Random_estado_4=="Campeche"){
                 let municipio_3_Arr = ["Calkiní", "Campeche","Carmen"];
                 let Random_municipio_3 = municipio_3_Arr[Math.floor(Math.random()*municipio_3_Arr.length)]; 
                 cy.get("#selMunicipioDocSoporte").select(Random_municipio_3)
                 cy.wait(1000)
                 cy.log(Random_municipio_3)
             }
             //Agregar
             cy.get('#btnAgregarDocSoporte').should('be.visible').click({force: true})
             cy.wait(tiempo)

            
             //Observaciones
             cy.xpath("//textarea[@placeholder='Observaciones']").should('be.visible').type('Demo de la Observación dos numero #'+folio+200)
             cy.wait(tiempo)
             //Siguiente
             cy.xpath("//button[@class='btn btn-primary  size'][contains(.,'Siguiente')]").should('be.visible').click({force: true})
             cy.wait(tiempo)

            


             //VISTA PREVIA
             cy.xpath("//button[@href='#panel-01']").should('be.visible').click({force: true})
             cy.wait(1000)
             cy.xpath("//button[@href='#panel-01']").should('be.visible').click({force: true})
             cy.wait(1000)
             //POSITIVO
             cy.get('#radioC').should('be.visible').click({force: true})
             cy.wait(tiempo)

              //NEGATIVO IMPORTANTE
              cy.get('#radioNC').should('be.visible').click({force: true})
              cy.wait(tiempo)
 
              //Resultado inpección
              let resultado_Arr = ["negativo 1"];
              let Random_resultado = resultado_Arr[Math.floor(Math.random()*resultado_Arr.length)]; 
              cy.xpath("//select[@formcontrolname='resultadoVerificacionId']").select(Random_resultado)
              cy.wait(1000)
 
             //Acción resultante
             let accion_Arr = ["Acción resultante 1", "Acción resultante 10","Acción resultante 11"];
             let Random_accion = accion_Arr[Math.floor(Math.random()*accion_Arr.length)]; 
             cy.xpath("//select[contains(@formcontrolname,'accionResultanteId')]").select(Random_accion)
             cy.wait(1000)
 
            //  //Resultado inpección
            //  let resultado_Arr = ["Resultado 1"];
            //  let Random_resultado = resultado_Arr[Math.floor(Math.random()*resultado_Arr.length)]; 
            //  cy.xpath("//select[@formcontrolname='resultadoVerificacionId']").select(Random_resultado)
            //  cy.wait(1000)

             //Finalizar
             cy.xpath("//button[@class='btn btn-primary size'][contains(.,'Finalizar')]").should('be.visible').click({force: true})
             cy.wait(1500)
            
             //Cancelar
             cy.xpath("(//button[@class='btn btn-default'][contains(.,'Cancelar')])[3]").should('be.visible').click({force: true})
             cy.wait(1000)





             //COMIENZA ACTA DE CIRCUSTANCIAS

             cy.xpath("//a[contains(.,'Actas Circunstanciadas')]").click({force: true})
             cy.wait(tiempo)
             //Ley Federal
             let ley_Arr = ["Sanidad Animal", "Sanidad Vegetal"];
             let Random_ley = ley_Arr[Math.floor(Math.random()*ley_Arr.length)]; 
             cy.get("#id_conductor_leyFederal").select(Random_ley)
             cy.wait(1000)
             //sin datos
             cy.get("#id_conductor_sinDatos").click({force: true})
             cy.wait(tiempo)
             //sin identificacion
             cy.get("#id_identificacionRadio_No").click({force: true})
             cy.wait(tiempo)
             //Guardar
             cy.xpath("//button[@class='btn btn-primary mr-1'][contains(.,'Guardar')]").should('be.visible').click({force: true})
             cy.wait(1500)
             //siguiente
             cy.xpath("//button[@class='btn btn-danger'][contains(.,'Siguiente')]").should('be.visible').click({force: true})
             cy.wait(1500)
 
             //DATOS DEL VEHICULO
             let carro_Arr = ["Ford", "Nisan","Mercedes"];
             let Random_carro = carro_Arr[Math.floor(Math.random()*carro_Arr.length)]; 
             cy.get('#id_nombre').should('be.visible').type(Random_carro)
             cy.wait(tiempo)
             //tipo
             let tipo_v_Arr = ["Tipo de vehículo 2", "Tipo de vehículo 3"];
             let Random_tipo_v = tipo_v_Arr[Math.floor(Math.random()*tipo_v_Arr.length)]; 
             cy.get("#idVehiculo").select(Random_tipo_v)
             cy.wait(1000)
             //modelo
             cy.get('#id_modelo').should('be.visible').type('Modelo#'+cantidad+99768657)
             cy.wait(tiempo)
             //placas
             cy.get('#id_placas').should('be.visible').type('Placas#'+cantidad+8989789789)
             cy.wait(tiempo)
             //estado
             let estado_per_Arr = ["Aguascalientes","Campeche"];
             let Random_estado_per = estado_per_Arr[Math.floor(Math.random()*estado_per_Arr.length)]; 
             cy.get('#idEntidadVeh').select(Random_estado_per)
 
             //DATOS DEL PROPIETARIO
             //Nombre
             let can=Math.floor(Math.random() * 198989879);
             cy.get('#id_nombreProp').should('be.visible').type('Propietario'+can+3434)
             cy.wait(tiempo)
             //apellido
             cy.get('#id_apellidoPaterno').should('be.visible').type('Apellido'+can+567567)
             cy.wait(tiempo)
             //Materno
             cy.get('#id_apellidoMaterno').should('be.visible').type('Materno'+can+4234)
             cy.wait(tiempo)
             //Domicilio
             //estado
             let estado_per2_Arr = ["Aguascalientes"];
             let Random_estado_per2 = estado_per2_Arr[Math.floor(Math.random()*estado_per2_Arr.length)]; 
             cy.get('#id_estado').select(Random_estado_per2)
             //Municipio
                 if(Random_estado_per2=="Aguascalientes"){
                     let municipio_per_Arr = ["Asientos"];
                     let Random_municipio_per = municipio_per_Arr[Math.floor(Math.random()*municipio_per_Arr.length)]; 
                     cy.get("#id_municipio").select(Random_municipio_per)
                     cy.wait(1000)                   
                     if(Random_municipio_per=="Asientos"){
                         let municipio_loc_Arr = ["3 Valles","Alvarado"];
                         let Random_municipio_loc = municipio_loc_Arr[Math.floor(Math.random()*municipio_loc_Arr.length)]; 
                         cy.get("#id_localidad").select(Random_municipio_loc)
                         cy.wait(1000)
                     }
                 }
               
             //Calle
             cy.get('#id_calle').should('be.visible').type('Cale numero'+can+567867)
             cy.wait(tiempo)
             //numero exterios
             cy.get('#id_numeroExterior').should('be.visible').type(cantidad)
             cy.wait(tiempo)
             //Num interior
             cy.get('#id_numeroInterior').should('be.visible').type(cantidad+30)
             cy.wait(tiempo)
             //Guardar
             cy.xpath("//button[contains(@id,'id_btn_guardar')]").should('be.visible').click({force: true})
             cy.wait(tiempo)
             //Siguiente
             cy.xpath("//button[contains(@id,'id_btn_siguiente')]").should('be.visible').click({force: true})
             cy.wait(tiempo)
 
             //Paso 3 testigo
             cy.get('#id_testigo_nombre').should('be.visible').type('Nombre'+can)
             cy.wait(tiempo)
             cy.get('#id_testigo_apellidoPaterno').should('be.visible').type('Apellido Paterno'+can+10)
             cy.wait(tiempo)
             //Materno
             cy.get('#id_testigo_apellidoMaterno').should('be.visible').type('Materno'+can+89)
             cy.wait(tiempo)
             //Estado civil
             let estado_civil_Arr = ["Soltero","Casado","Divorciado"];
             let Random_estado_civil = estado_civil_Arr[Math.floor(Math.random()*estado_civil_Arr.length)]; 
             cy.get("#id_testigo_estadoCivil").select(Random_estado_civil)
             cy.wait(1000)
             //Domicilio
             //estado
             let estado_per3_Arr = ["Aguascalientes"];
             let Random_estado_per3 = estado_per3_Arr[Math.floor(Math.random()*estado_per3_Arr.length)]; 
             cy.get('#id_estado').select(Random_estado_per3)
             //Municipio
                 if(Random_estado_per3=="Aguascalientes"){
                     let municipio_per3_Arr = ["Asientos"];
                     let Random_municipio_per3 = municipio_per3_Arr[Math.floor(Math.random()*municipio_per3_Arr.length)]; 
                     cy.get("#id_municipio").select(Random_municipio_per3)
                     cy.wait(1000)                   
                     if(Random_municipio_per3=="Asientos"){
                         let municipio_loc3_Arr = ["3 Valles","Alvarado"];
                         let Random_municipio_loc3 = municipio_loc3_Arr[Math.floor(Math.random()*municipio_loc3_Arr.length)]; 
                         cy.get("#id_localidad").select(Random_municipio_loc3)
                         cy.wait(1000)
                     }
                 }
             //calle
             cy.get('#id_calle').should('be.visible').type('Calle#'+can)
             cy.wait(tiempo)
             //numero exterios
             cy.get('#id_numeroExterior').should('be.visible').type(cantidad)
             cy.wait(tiempo)
             //Num interior
             cy.get('#id_numeroInterior').should('be.visible').type(cantidad+30)
             //No
             cy.xpath("//input[contains(@id,'id_identificacionRadio_No')]").click({force: true})
             cy.wait(tiempo)
             //Guardad
             cy.xpath("//button[contains(@id,'id_btn_guardar')]").should('be.visible').click({force: true})
             cy.wait(1200)
             //Siguiente
             cy.xpath('//*[@id="id_btn_siguiente"]').should('be.visible').click({force: true})
             cy.wait(tiempo)
 
             //Paso 4 testigo 2
              //Paso 3 testigo
              cy.get('#id_testigo_nombre').should('be.visible').type('Nombre'+can)
              cy.wait(tiempo)
              cy.get('#id_testigo_apellidoPaterno').should('be.visible').type('Apellido Paterno'+can+10)
              cy.wait(tiempo)
              //Materno
              cy.get('#id_testigo_apellidoMaterno').should('be.visible').type('Materno'+can+89)
              cy.wait(tiempo)
              //Estado civil
              let estado_civil2_Arr = ["Soltero","Casado","Divorciado"];
              let Random_estado_civil2 = estado_civil2_Arr[Math.floor(Math.random()*estado_civil2_Arr.length)]; 
              cy.get("#id_testigo_estadoCivil").select(Random_estado_civil2)
              cy.wait(1000)
              //Domicilio
             //estado
              let estado_per4_Arr = ["Aguascalientes"];
              let Random_estado_per4 = estado_per4_Arr[Math.floor(Math.random()*estado_per4_Arr.length)]; 
              cy.get('#id_estado').select(Random_estado_per4)
              //Municipio
                 if(Random_estado_per4=="Aguascalientes"){
                     let municipio_per4_Arr = ["Asientos"];
                     let Random_municipio_per4 = municipio_per4_Arr[Math.floor(Math.random()*municipio_per4_Arr.length)]; 
                     cy.get("#id_municipio").select(Random_municipio_per4)
                     cy.wait(1000)                   
                     if(Random_municipio_per4=="Asientos"){
                         let municipio_loc4_Arr = ["3 Valles","Alvarado"];
                         let Random_municipio_loc4 = municipio_loc4_Arr[Math.floor(Math.random()*municipio_loc4_Arr.length)]; 
                         cy.get("#id_localidad").select(Random_municipio_loc4)
                         cy.wait(1000)
                     }
                 }
             
              cy.wait(tiempo)
              //calle
              cy.get('#id_calle').should('be.visible').type('Calle#'+can)
              cy.wait(tiempo)
              //numero exterios
              cy.get('#id_numeroExterior').should('be.visible').type(cantidad)
              cy.wait(tiempo)
              //Num interior
              cy.get('#id_numeroInterior').should('be.visible').type(cantidad+30)
              //No
              cy.xpath("//input[contains(@id,'id_identificacionRadio_No')]").click({force: true})
              cy.wait(tiempo)
              //Guardad
              cy.xpath("//button[contains(@id,'id_btn_guardar')]").should('be.visible').click({force: true})
              cy.wait(2000)
              //Siguiente
              cy.xpath('//*[@id="id_btn_siguiente"]').should('be.visible').click({force: true})
              cy.wait(tiempo)
              
 
              //Paso 5 hechos
              cy.get('#id_hechos').should('be.visible').type('Demo del contenido de los hechos, esto es un demo del texto#'+can+2342343)
              cy.wait(tiempo)
              //Manifesto
              cy.get('#id_manifiesto').should('be.visible').type('Demo del contenido de Manifesto #'+can +676554)
              cy.wait(tiempo)
              //Guardar
              cy.xpath("//button[contains(@id,'id_btn_guardar')]").should('be.visible').click({force: true})
              cy.wait(2000)
              //Siguiente
              cy.xpath("//button[contains(@id,'id_btn_siguiente')]").should('be.visible').click({force: true})
              cy.wait(tiempo)
 
              //Documentos Anexos
              //cy.get("#idActaDocumento").select("Fotos soporte")
              //imagen
             //  const ruta='img2.jpg'
             //  const ruta2='uno.jpg'
             //  cy.get('#id_file_modal').attachFile(ruta)
             //  cy.wait(2000)
             //  cy.get('#id_file_modal').attachFile(ruta2)
             //  cy.wait(3000)
              //Agregar
             //  cy.get('#id_btn_agregar').should('be.visible').click({force: true})
             //  cy.wait(tiempo)
              
              //cy.wait(9999999)
              cy.wait(2000)
              //Guardar
              cy.get('#id_btn_guardar').should('be.visible').click({force: true})
              cy.wait(tiempo)
              //Liberar
              cy.get('#id_btn_liberarActa').should('be.visible').click({force: true})
              cy.wait(tiempo)
              //Aceptar
              cy.xpath('//*[@id="modalActa"]/div/div/div[3]/button[2]').click({force: true})
              cy.wait(1000)
              cy.xpath('//*[@id="modalActa"]/div/div/div[3]/button[2]').click({force: true})
              cy.wait(1000)
 
              //Salir
              cy.get('#id_salir_sipvi').should('be.visible').click({force: true})
              cy.wait(1000)
 
             
           
        }
       

    }//final bloque master


   



}//final

export default test_PO;