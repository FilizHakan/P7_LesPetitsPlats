export default class TagListings 
{
    constructor (data)
    {
        this._recipes = data;
        this._ingredients = data.ingredients;
        this._ustencils = data.ustencils;
        this._appliances = data.appliances;
    }

    // Render list of ingredients 

    renderIngredientsList ()
    {
        const ingredientsList = document.createElement('ul');
        ingredientsList.setAttribute('class', 'displayNone listing ingredientsList col-sm-12');

        const listIng = `
        ${this._ingredients}
              `;

              ingredientsList.innerHTML = listIng;

              return ingredientsList;
    }

    // Render list of appliances

    renderAppliancesList ()
    {
        const appliancesList = document.createElement('ul');
        appliancesList.setAttribute('class', 'displayNone listing appliancesList col-sm-12');

        const listApp = `
        ${this._applicances}
              `;

              appliancesList.innerHTML = listApp;

              return appliancesList;
    }

    // Render list of Ustencils

    renderUstencilsList ()
    {
        const ustencilsList = document.createElement('ul');
        ustencilsList.setAttribute('class', 'displayNone listing ustencilsList col-sm-12');

        const listUst = `
        ${this._ustencils}
              `;

              ustencilsList.innerHTML = listUst;

              return ustencilsList;
    }
}