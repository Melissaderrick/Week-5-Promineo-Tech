//Created different classes which are used as a template for creating objects.  With each class I was able to add in a constructor to easily follow along the syntax.
class Flower {
    constructor(name, style) {
        this.name = name;
        this.style = style;
    }

    describe() {
        return `This flower is a ${this.name} ${this.syle}.`;
    }
}

class Type {
    constructor(name) {
        this.name = name;
        this.flower = [];
    }

    addFlower(flower) {
        if (flower instanceof Flower) {
            this.flowers.push(flower);
        } else {
            throw new Error(`You can only add an instance of Flower. Argument is not a flower: ${flower}`);
        }
    }

    describe() {
        return `The ${this.name} type has ${this.flowers.length} flowers.`;
    }
}

class Menu {
    constructor() {
        this.types = [];
        this.selectedType = null;
    }
// the start method is used to tell the meachine to run this method of thread.  This shows the current thread which returns from the call to the start method, and the other method which executes its run method.
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
        1) enter flower
        2) remove flower
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
        let index = prompt('Enter the type of flower you wish to view:');
        if (index > -1 && index < this.types.length) {
            this.selectedType = this.types[index];
            let description = 'Type of flower: ' + this.selectedType.name + '\n';
            
            for (let i = 0; i < this.selectedType.flowers.length; i++) {
                description += i + ') ' + this.selectedType.flowers[i].name
                 + ' - ' + this.selectedType.flowers[i].style + '\n';
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
    

    createGuitar() {
        let name = prompt('Enter name (brand) of the new flower:');
        let color = prompt('Enter the style of the new flower:');
        this.selectedType.guitars.push(new Flower(name, style));
    }

    deleteGuitar() {
        let index = prompt('Enter the index of the flower you wish to remove:');
        if (index > -1 && index < this.selectedType.flowers.length) {
            this.selectedType.flowers.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();