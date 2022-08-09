# notas

* La carpeta dist => este de donde los usuarios podran obtener  los componentes

* El archivo typing.d.ts => me sirve aser la configuracion de los modulos de CSS
```
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.jpg" {
    const value: any;
    export default value;
}
```
***Recureda poner dentro de la carpeta src***

* git tag -a v0.0.1 -m "" => este me perimite describi la version