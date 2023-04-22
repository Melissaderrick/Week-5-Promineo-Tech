//MENU APP- Created two Classes Flower and Type as one of the requirments of the project
class Flower {
    constructor(name, style) {
        this.name = name;
        this.style = style;
    }

    describe() {
        return `This Flower is a ${this.name} ${this.syle}.`;
    }
}

class Type {
    constructor(name) {
        this.name = name;
        this.Flowers = [];
    }

    addFlower(Flower) {
        if (Flower instanceof Flower) {
            this.Flowers.push(Flower);
        } else {
            throw new Error(`You can only add an instance of Flower. Argument is not a Flower: ${Flower}`);
        }
    }

    describe() {
        return `The ${this.name} type has ${this.Flowers.length} Flowers.`;
    }
}
//Added in Me
class Menu {
    constructor() {
        this.types = [];
        this.selectedType = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createType();
                    break;
                case '2':
                    this.viewType();
                    break;
                case '3':
                    this.deleteType();
                    break;
                case '4':
                    this.displayTypes();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) enter new flower type
        2) view flower types
        3) remove flower types
        4) display all flower types
        `);
    }

    showTypeMenuOptions(typeInfo) {
        return prompt(`
        0) back
        1) enter Color
        2) remove Color
        ----------------------
        ${typeInfo}
        `);
    }

    displayTypes() {
        let typeString = '';
        for (let i = 0; i < this.types.length; i++) {
            typeString += i + ') ' + this.types[i].name + '\n';
        }
        alert(typeString);
    }

    createType() {
        let name = prompt('Enter type of flower');
        this.types.push(new Type(name));
    }

    viewType() {
        let index = prompt('Enter the index of the type of flower you wish to view:');
        if (index > -1 && index < this.types.length) {
            this.selectedType = this.types[index];
            let description = 'Type of Flower: ' + this.selectedType.name + '\n';
            
            for (let i = 0; i < this.selectedType.Flowers.length; i++) {
                description += i + ') ' + this.selectedType.Flowers[i].name
                 + ' - ' + this.selectedType.Flowers[i].style + '\n';
            }

            let selection = this.showTypeMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createFlower();
                    break;
                case'2':
                    this.deleteFlower();
            }
        }
    }

    deleteType() {
        let index = prompt('Enter the index of the type of flower you wish to remove:');
        if (index > -1 && index < this.types.length) {
            this.types.splice(index, 1);
        }
    }
    

    createFlower() {
        let name = prompt('Enter name (brand) of the new Flower:');
        let style = prompt('Enter the style of the new Flower:');
        this.selectedType.Flowers.push(new Flower(name, style));
    }

    deleteFlower() {
        let index = prompt('Enter the index of the flower you wish to remove:');
        if (index > -1 && index < this.selectedType.flowers.length) {
            this.selectedType.flowers.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();