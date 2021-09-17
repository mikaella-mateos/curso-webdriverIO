import BasePage from '../Pages/basePage';

class categoryPage extends BasePage {

    get color(){return $('layered_color')}

    async filtrarResultado(){
        addStep(`Filtrar el resultado por color`)
        await super.clickearElemento(this.color);
    }
}
export default new categoryPage();