import BasePage from "./basePage";

class itemPage extends BasePage {
    //Elementos Web
   get itemSelec(){ return $('.pb-center-column h1') }
   get wishListBtn(){return $('#wishlist_button')}
   
   async obtenerNombreItemSelec() {
    addStep(`Obtener nombre del item seleccionado`)
    return await (await this.itemSelec).getText();
}
    async agregarAWishList(){
        addStep(`Agregar item a la wishlist`)
        await (await this.wishListBtn).click();
    }
}
export default new itemPage();
