export default class Dropdown
{
    constructor(ref, placeholder, color)
    {
        this.ref = ref;
        this.placeholder = placeholder;
        this.color = color;
    }


    createDropdown()
    {
        const container = document.createElement('div');
        const dropdown =`
        <div class="col-lg-2 col-sm-4" data-id="${this.ref}">
            <form class="${this.ref} dropDown dropDown--${this.ref}" role="button" aria-haspopup="listbox" aria-expanded>
                <label for="${this.ref}"></label>
                <input type="text" class="${this.color}-background inputDropDown" value="" placeholder="${this.placeholder}">
                <i class="bi bi-chevron-down arrowOpen"></i>
                <i class="bi bi-chevron-up arrowClose displayNone"></i>
            </form>
            <div class="options displayNone" role="listbox"></div>
        </div>
        `;
        container.innerHTML = dropdown;

        return container;
    }
}