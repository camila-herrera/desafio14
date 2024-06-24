const propiedades_alquiler = [
    {
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    zona: 'Apartamento de lujo en zona exclusiva',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    direccion:'123 Luxury Lane, Prestige Suburb, CA 45678',
    cantidadDeHabtaciones: '4 Habitaciones',
    CantidadDeBaños: '4 Baños',
    valor: '5.000',
    MascotasPermitidas:false,
    AreaDeFumadores: true,
    },
    {
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    zona: 'Apartamento acogedor en la montaña',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    direccion:'789 Mountain Road, Summit Peaks, CA 23456',
    cantidadDeHabtaciones: '2 Habitaciones',
    CantidadDeBaños: '1 Baños',
    valor: '1.200',
    MascotasPermitidas: true,
    AreaDeFumadores: true,
    },
    {
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    zona: 'Penthouse de lujo con terraza panorámica',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    direccion:'567 Skyline Avenue, Skyview City, CA 56789',
    cantidadDeHabtaciones: '3 Habitaciones',
    CantidadDeBaños: '3 Baños',
    valor: '4.500',
    MascotasPermitidas:false,
    AreaDeFumadores: false,
    },
    {
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20220809/2128686/n_wm_2022080937592226182.webp',
    zona: 'Casa de lujo en zona exclusiva',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    direccion:'123 Luxury Lane, Prestige Suburb, CA 45678',
    cantidadDeHabtaciones: '4 Habitaciones',
    CantidadDeBaños: '4 Baños',
    valor: '3.850',
    MascotasPermitidas:false,
    AreaDeFumadores: true,
    },
    {
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20231123/2927383/n_wm_2023112338499710141.webp',
    zona: 'Condominio Casas del Parque 7 San Bernardo',
    descripcion: 'Ubicación privilegiada a minutos del centro de San Bernardo, cercano a: colegios, supermercados, centros de salud, Mall Plaza Sur.',
    direccion:'7Av. Los suspiros 16340 , San Bernardo, Metropolitana',
    cantidadDeHabtaciones: '3 Habitaciones',
    CantidadDeBaños: '2 Baños',
    valor: '1.200',
    MascotasPermitidas: true,
    AreaDeFumadores: true,
    },
    {
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20071101/198246/n_wm_2023112843015078231.webp',
    zona: 'Ciudad del Sol',
    descripcion: 'Ciudad del Sol es un barrio único con más de 16 años de consolidación, un proyecto diseñado para entregar una mejor calidad de vida a las familias de hoy.',
    direccion:'Creta 1541 , Puente Alto, Metropolitana',
    cantidadDeHabtaciones: '3 Habitaciones',
    CantidadDeBaños: '1 Baños',
    valor: '4.346',
    MascotasPermitidas: true,
    AreaDeFumadores: true,
    },
    {
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20220829/2151843/n_wm_2022082949038938801.webp',
    zona: 'La Araucaria',
    descripcion: 'Esclusivo condominio de 58 casas aisladas 100% hormigón de 3D/2B en 70 mt2 a pasos de futuro metrotren Santiago/Melipilla. Ubicado en el centro de El Monte.',
    direccion:'Av Libertadores 689 , El Monte, Metropolitana',
    cantidadDeHabtaciones: '3 Habitaciones',
    CantidadDeBaños: '2 Baños',
    valor: '3.600',
    MascotasPermitidas:false,
    AreaDeFumadores: true,
    },
    {
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20210831/1812603/n_wm_2021083108220160324.webp',
    zona: 'Condominio Las Praderas de Chicauma',
    descripcion: 'Condominios con acceso controlado',
    direccion:'Avenida del Parque 800 , Lampa, Metropolitana',
    cantidadDeHabtaciones: '3 Habitaciones',
    CantidadDeBaños: '3 Baños',
    valor: '1.200',
    MascotasPermitidas: true,
    AreaDeFumadores: true,
    },
    {
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20200120/1403809/n_wm_2020012040396932525.webp',
    zona: 'Ayres de Chicureo',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    direccion:'Casa de Piedra 700 , Colina, Metropolitana',
    cantidadDeHabtaciones: '3 Habitaciones',
    CantidadDeBaños: '3 Baños',
    valor: '5.523',
    MascotasPermitidas:false,
    AreaDeFumadores: false,
}]

const propiedades_venta = [
    {
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    zona: 'Apartamento en el centro de la ciudad',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    direccion:'123 Main Street, Anytown, CA 91234',
    cantidadDeHabtaciones: '2 Habitaciones',
    CantidadDeBaños: '2 Baños',
    valor: '2.000',
    MascotasPermitidas:false,
    AreaDeFumadores: false,
    },
    {
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    zona: 'Apartamento luminoso con vista al mar',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    direccion:'456 Ocean Avenue, Seaside Town, CA 56789',
    cantidadDeHabtaciones: '3 Habitaciones',
    CantidadDeBaños: '3 Baños',
    valor: '2.500',
    MascotasPermitidas: true,
    AreaDeFumadores: true,
    },
    {
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    zona: 'Condominio moderno en zona residencial',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    direccion:'123 Main Street, Anytown, CA 91234',
    cantidadDeHabtaciones: '2 Habitaciones',
    CantidadDeBaños: '2 Baños',
    valor: '2.200',
    MascotasPermitidas:false,
    AreaDeFumadores: false,
    },
    {
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20230601/2604302/n_wm_2023060132421712651.webp',
    zona: 'Condominio Mirador - Piedra Roja',
    descripcion: 'En Mirador Piedra Roja encontrarás vida de barrio en un entorno rodeado de naturaleza, con una incomparable sensación de libertad.',
    direccion:'Avenida Jose Rabbat 11005 , Colina',
    cantidadDeHabtaciones: '3 Habitaciones',
    CantidadDeBaños: '3 Baños',
    valor: '12.200',
    MascotasPermitidas: true,
    AreaDeFumadores: false,
    },
    {
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20230320/2464771/n_wm_2023042037416503992.webp',
    zona: 'Condominio Parque Monasterio',
    descripcion: 'Condominio Parque Monasterio es un exclusivo condominio de solo 17 casas a solo 650 mts del metrotrén, en una de las zonas más seguras de Linderos.',
    direccion:'El Cerrillo 16 , Buin, Metropolitana',
    cantidadDeHabtaciones: '4 Habitaciones',
    CantidadDeBaños: '4 Baños',
    valor: '10.690',
    MascotasPermitidas: false,
    AreaDeFumadores: false,
    },
    {
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20181113/1115146/n_wm_2023082916216779177.webp',
    zona: 'Parque Aconcagua II',
    descripcion: 'El proyecto está ubicado a sólo 45 minutos de Santiago, en un sector apacible de la comuna de Padre Hurtado, cercano a supermercados, colegios, bancos y centro cívico.',
    direccion:'Estero Chacabuco 2116 , Padre Hurtado, Metropolitana',
    cantidadDeHabtaciones: '3 Habitaciones',
    CantidadDeBaños: '1 Baños',
    valor: '1.900',
    MascotasPermitidas: true,
    AreaDeFumadores: true,
    },
    {
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20210206/1667402/n_wm_2024032104212624123.webp',
    zona: 'Hacienda Curauma - Condominio Algarrobo',
    descripcion: 'Condominio Algarrobo está ubicado en una zona residencial, emplazado en Valparaíso, en el sector de Curauma.',
    direccion:'Av. Jardines del Bosque 311 , Valparaíso, Valparaíso',
    cantidadDeHabtaciones: '3 Habitaciones',
    CantidadDeBaños: '3 Baños',
    valor: '5.674',
    MascotasPermitidas:false,
    AreaDeFumadores: false,
    },
    {
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20170803/840166/n_wm_2019092330460018151.webp',
    zona: 'Convet Barrio Las Vizcachas de San Esteban',
    descripcion: 'En un proyecto único donde disfrutar de las situaciones cotidianas es toda una experiencia',
    direccion:'Av. La Florida 268, San Esteban , Los Andes, Valparaíso',
    cantidadDeHabtaciones: '3 Habitaciones',
    CantidadDeBaños: '2 Baños',
    valor: '2.826',
    MascotasPermitidas: false,
    AreaDeFumadores: true,
    },
    {
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20190328/1202685/n_wm_2023010504222271173.webp',
    zona: 'Lunger Park 2',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    direccion:'Puente Vicente Zorrilla 100 , La Serena, Coquimbo',
    cantidadDeHabtaciones: '3 Habitaciones',
    CantidadDeBaños: '2 Baños',
    valor: '2.671',
    MascotasPermitidas:false,
    AreaDeFumadores: false,
}]

const propiedadesAlquiler = document.querySelector('#alquiler');
let templateAlquiler = '';
let counterAlquiler = 0;

for (let propiedad of propiedades_alquiler) {
    if (counterAlquiler < 3) {
        templateAlquiler += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
                <div class="card-body">
                    <h5 class="card-title">${propiedad.zona}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i>${propiedad.direccion}</p>
                    <p><i class="fas fa-bed"></i>${propiedad.cantidadDeHabtaciones} |
                    <i class="fas fa-bath"></i>${propiedad.cantidadDeBaños}</p> <!-- Corregido mayúscula en cantidadDeBaños -->
                    <p><i class="fas fa-dollar-sign"></i>${propiedad.valor}</p>
                    ${propiedad.AreaDeFumadores
                            ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                            : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
                    }
                    ${propiedad.MascotasPermitidas
                            ? ` <p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas </p>`
                            : `<p class="text-danger"><i class="fa-solid fa-ban"></i>No se permiten mascotas </p>`
                    }
                </div>
            </div>
        </div>`;
        counterAlquiler++;
    }
}
propiedadesAlquiler.innerHTML = templateAlquiler;

const propiedadesVenta = document.querySelector('#ventas');
let templateVenta = '';
let counterVenta = 0;

for (let propiedad of propiedades_venta) {
    if (counterVenta < 3) {
        templateVenta += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
                <div class="card-body">
                    <h5 class="card-title">${propiedad.zona}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i>${propiedad.direccion}</p>
                    <p><i class="fas fa-bed"></i>${propiedad.cantidadDeHabtaciones} |
                    <i class="fas fa-bath"></i>${propiedad.cantidadDeBaños}</p> <!-- Corregido mayúscula en cantidadDeBaños -->
                    <p><i class="fas fa-dollar-sign"></i>${propiedad.valor}</p>
                    ${propiedad.AreaDeFumadores
                        ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                        : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
                    }
                    ${propiedad.MascotasPermitidas
                            ? ` <p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas </p>`
                            : `<p class="text-danger"><i class="fa-solid fa-ban"></i>No se permiten mascotas </p>`
                    }
                </div>
            </div>
        </div>`;
        counterVenta++;
}}
propiedadesVenta.innerHTML = templateVenta;