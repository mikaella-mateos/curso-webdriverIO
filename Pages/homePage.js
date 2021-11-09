import BasePage from '../Pages/basePage';

class HomePage extends BasePage {

   //WebElements
   get barraDeBusqueda(){ return $('[name="search_query"]') }
   get nombreProducto(){return  $("a.product-name")}
   get filtroColor(){return $('a.sf-with-ul')}


   //-------------------------------------------------------------------------------------------------------//

   /**
    * Escribe el artículo en el campo de búsqueda y presiona Enter
    * @param {String} articulo que se buscará
    */
   async buscar(articulo) {
       addStep(`Buscar articulo: ${articulo}`)
       await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
       (await this.barraDeBusqueda).keys('Enter');
   }

   /**
    * Obtener texto de la barra de búsqueda
    */
   async obtenerTextoBusqueda() {
       addStep(`Obtener texto de busqueda`)
       return (await this.barraDeBusqueda).getValue();
   }

   /**Clickear nombre de producto **/
   async clickearItem(){
       addStep('Clickear producto')
       return(await this.clickearElemento(this.nombreProducto));
   }

   /**Filtrar por color **/
   async filtrarPorColor(){
       addStep('Filtrar por color')
       return(await this.clickearElemento(this.filtroColor));
   }


}

export default new HomePage();
