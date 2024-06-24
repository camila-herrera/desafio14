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

const propiedadesAlquiler = document.querySelector('#alquiler');
let templateAlquiler = '';
let counterAlquiler = 0;

for (let propiedad of propiedades_alquiler) {
templateAlquiler += `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
            <div class="card-body">
                <h5 class="card-title">${propiedad.zona}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i>${propiedad.direccion}</p>
                <p><i class="fas fa-bed"></i>${propiedad.cantidadDeHabtaciones} |
                <i class="fas fa-bath"></i>${propiedad.CantidadDeBaños}</p>
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

propiedadesAlquiler.innerHTML = templateAlquiler;   