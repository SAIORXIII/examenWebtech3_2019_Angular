export class Product {

   constructor (public name: string, public examen: string, public reden: string,public datumIndienen: string) {}

   toForm(): string {
      return `name=${this.name}&examen=${this.examen}&reden=${this.reden}&datumIndienen=${this.datumIndienen}`;
   }
}
