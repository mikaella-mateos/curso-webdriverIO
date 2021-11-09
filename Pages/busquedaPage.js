import BasePage from '../Pages/basePage';

class BusquedaPage extends BasePage {

   //Elementos Web
   get resultado(){ return $('.product_list h5') }
   
   
   //-------------------------------------------------------------------------------------------------------//
 
   /**
    * Click en el resultado de la búsqueda
    */
   async ingresarAlResultado() {
       addStep(`Ingresar al resultado`)
       await super.clickearElemento(this.resultado);
   }

   /**
    * Obtener texto del resultado de la búsqueda
    */
   async obtenerNombreResultado() {
       addStep(`Obtener nombre del resultado`)
       return await (await this.resultado).getText();
   }

   

}

export default new BusquedaPage();
