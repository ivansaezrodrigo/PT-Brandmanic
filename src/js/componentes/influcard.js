import { formateaNumero } from "../utils/letrasNumeros.js";

// Funcion para crear las influcard por parametros
export function creaInflucard(params) {
    const influcardDiv = document.createElement('div');
    influcardDiv.className = 'influcard';

    const perfilDiv = document.createElement('div');
    perfilDiv.className = 'influcard__perfil';

    const imgContainerDiv = document.createElement('div');
    imgContainerDiv.className = 'influcard__perfil--img-container';

    const img = document.createElement('img');
    img.className = 'influcard__perfil--img';
    img.src = params.sourceAvatar;
    img.alt = 'Avatar influcard';

    const pulsarDiv = document.createElement('div');
    pulsarDiv.className = 'influcard__perfil--pulsar';
    pulsarDiv.textContent = 'Ver influcard';
    const pulsarLink = document.createElement('a');
    pulsarLink.href = '/influcardStats.html';
    pulsarLink.classList = 'verInflucard';
    //pulsarDiv.appendChild(pulsarLink);
    pulsarLink.appendChild(pulsarDiv);

    imgContainerDiv.appendChild(img);
    imgContainerDiv.appendChild(pulsarLink);

    perfilDiv.appendChild(imgContainerDiv);

    const datosDiv = document.createElement('div');
    datosDiv.className = 'influcard__perfil--datos';
    const usernameSpan = document.createElement('span');
    usernameSpan.textContent = params.username;

    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    li1.textContent = `${params.sexo}, ${params.edad} años`;
    const li2 = document.createElement('li');
    li2.textContent = params.pais;
    const li3 = document.createElement('li');
    li3.textContent = params.categorias;

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    datosDiv.appendChild(usernameSpan);
    datosDiv.appendChild(ul);

    perfilDiv.appendChild(datosDiv);

    influcardDiv.appendChild(perfilDiv);

    const statsDiv = document.createElement('div');
    statsDiv.className = 'influcard__stats';

    // lugar donde se implementan los svgs de cada apartado
    const statsData = [
        {
            label: 'Audiencia', value: params.cantidadAudiencia, icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14.754 10C15.72 10 16.504 10.784 16.504 11.75V16.499C16.504 17.6927 16.0298 18.8376 15.1857 19.6817C14.3416 20.5258 13.1967 21 12.003 21C10.8093 21 9.66441 20.5258 8.82031 19.6817C7.97621 18.8376 7.502 17.6927 7.502 16.499V11.75C7.502 10.784 8.285 10 9.252 10H14.754ZM7.131 10C6.77082 10.4335 6.55417 10.9681 6.511 11.53L6.501 11.75V16.499C6.501 17.346 6.693 18.148 7.035 18.864C6.44228 19.0226 5.82103 19.0427 5.21929 18.9228C4.61756 18.8029 4.05145 18.5463 3.56475 18.1727C3.07805 17.7991 2.68379 17.3185 2.41246 16.7682C2.14114 16.2179 2.00001 15.6126 2 14.999V11.75C2.00002 11.3108 2.16517 10.8877 2.46268 10.5646C2.76019 10.2415 3.1683 10.0421 3.606 10.006L3.75 10H7.131ZM16.875 10H20.25C21.216 10 22 10.784 22 11.75V15C22.0001 15.6132 21.8593 16.2182 21.5884 16.7682C21.3175 17.3183 20.9237 17.7987 20.4376 18.1724C19.9514 18.546 19.3858 18.8029 18.7846 18.9232C18.1833 19.0435 17.5625 19.0239 16.97 18.866C17.27 18.238 17.454 17.546 17.495 16.814L17.504 16.499V11.75C17.504 11.085 17.269 10.475 16.875 10ZM12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6C15 6.79565 14.6839 7.55871 14.1213 8.12132C13.5587 8.68393 12.7956 9 12 9C11.2044 9 10.4413 8.68393 9.87868 8.12132C9.31607 7.55871 9 6.79565 9 6C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3ZM18.5 4C19.163 4 19.7989 4.26339 20.2678 4.73223C20.7366 5.20107 21 5.83696 21 6.5C21 7.16304 20.7366 7.79893 20.2678 8.26777C19.7989 8.73661 19.163 9 18.5 9C17.837 9 17.2011 8.73661 16.7322 8.26777C16.2634 7.79893 16 7.16304 16 6.5C16 5.83696 16.2634 5.20107 16.7322 4.73223C17.2011 4.26339 17.837 4 18.5 4ZM5.5 4C6.16304 4 6.79893 4.26339 7.26777 4.73223C7.73661 5.20107 8 5.83696 8 6.5C8 7.16304 7.73661 7.79893 7.26777 8.26777C6.79893 8.73661 6.16304 9 5.5 9C4.83696 9 4.20107 8.73661 3.73223 8.26777C3.26339 7.79893 3 7.16304 3 6.5C3 5.83696 3.26339 5.20107 3.73223 4.73223C4.20107 4.26339 4.83696 4 5.5 4Z" fill="#D9D9D9" />
    </svg>
    ` },
        {
            label: 'Fakes', value: params.cantidadFakes, icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M19.7917 17V19H7.29167V17C7.29167 17 7.29167 13 13.5417 13C19.7917 13 19.7917 17 19.7917 17ZM16.6667 8C16.6667 7.40666 16.4834 6.82664 16.14 6.33329C15.7966 5.83994 15.3086 5.45543 14.7376 5.22836C14.1665 5.0013 13.5382 4.94189 12.932 5.05765C12.3258 5.1734 11.769 5.45912 11.332 5.87868C10.8949 6.29824 10.5973 6.83279 10.4767 7.41473C10.3561 7.99667 10.418 8.59987 10.6545 9.14805C10.8911 9.69623 11.2916 10.1648 11.8055 10.4944C12.3194 10.8241 12.9236 11 13.5417 11C14.3705 11 15.1653 10.6839 15.7514 10.1213C16.3374 9.55871 16.6667 8.79565 16.6667 8ZM20 13.06C20.5694 13.5643 21.0285 14.1724 21.3504 14.8489C21.6723 15.5254 21.8507 16.2566 21.875 17V19H25V17C25 17 25 13.55 20 13.06ZM18.75 5C18.4353 5.00018 18.1225 5.04741 17.8229 5.14C18.4323 5.97897 18.7591 6.97718 18.7591 8C18.7591 9.02282 18.4323 10.021 17.8229 10.86C18.1225 10.9526 18.4353 10.9998 18.75 11C19.5788 11 20.3737 10.6839 20.9597 10.1213C21.5458 9.55871 21.875 8.79565 21.875 8C21.875 7.20435 21.5458 6.44129 20.9597 5.87868C20.3737 5.31607 19.5788 5 18.75 5ZM8.33333 10H0V12H8.33333V10Z" fill="#F8F8F8" />
    </svg>
    ` },
        {
            label: 'Media Eng', value: params.mediaEng, icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M17.869 3.889C15.773 3.889 13.982 5.383 12.998 6.413C12.014 5.383 10.227 3.889 8.132 3.889C4.521 3.889 2 6.406 2 10.009C2 13.979 5.131 16.545 8.16 19.027C9.59 20.2 11.07 21.412 12.205 22.756C12.396 22.981 12.676 23.111 12.97 23.111H13.028C13.323 23.111 13.602 22.98 13.792 22.756C14.929 21.412 16.408 20.199 17.839 19.027C20.867 16.546 24 13.98 24 10.009C24 6.406 21.479 3.889 17.869 3.889Z" fill="#F8F8F8" />
    </svg>
    ` },
        {
            label: 'Eng Ratio', value: params.engRatio, icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_8_545)">
            <path d="M1.47501 9C2.70201 10.84 4.77901 12.871 8.00001 15C11.221 12.871 13.298 10.84 14.525 9H12C11.9002 8.99998 11.8026 8.97006 11.7199 8.91409C11.6372 8.85813 11.5732 8.77869 11.536 8.686L10.079 5.044L8.48101 10.637C8.45243 10.7373 8.39321 10.8262 8.31163 10.8911C8.23004 10.9561 8.13018 10.994 8.02602 10.9994C7.92187 11.0048 7.81863 10.9775 7.73076 10.9213C7.6429 10.8651 7.5748 10.7828 7.53601 10.686L5.88901 6.568L4.41601 8.778C4.37027 8.84637 4.30838 8.90239 4.23582 8.94112C4.16325 8.97984 4.08226 9.00007 4.00001 9H1.47501Z" fill="#F8F8F8" />
            <path d="M0.880003 8C-2.427 1.68 4.41 -2 7.823 1.143C7.883 1.198 7.942 1.255 7.999 1.314C8.05542 1.25505 8.11414 1.19834 8.175 1.144C11.59 -2 18.426 1.68 15.12 8H12.337L10.463 3.314C10.4242 3.21719 10.3561 3.13493 10.2682 3.07874C10.1804 3.02255 10.0771 2.99524 9.97298 3.00064C9.86883 3.00604 9.76897 3.04388 9.68738 3.10886C9.6058 3.17383 9.54657 3.26269 9.518 3.363L7.921 8.956L6.464 5.314C6.43007 5.22951 6.37371 5.1559 6.30101 5.10109C6.22831 5.04628 6.14202 5.01237 6.05146 5.003C5.9609 4.99364 5.86949 5.00918 5.78711 5.04795C5.70474 5.08672 5.63451 5.14725 5.584 5.223L3.732 8H0.880003Z" fill="#F8F8F8" />
        </g>
        <defs>
            <clipPath id="clip0_8_545">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
    ` },
        {
            label: 'Impresiones', value: params.impresiones, icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z" fill="#F8F8F8" />
    </svg>
    ` },
    ];

    statsData.forEach(item => {
        const statDiv = document.createElement('div');
        statDiv.className = 'influcard__stat';

        const flexDiv = document.createElement('div');
        flexDiv.className = 'flex';

        flexDiv.innerHTML = item.icon;

        const span = document.createElement('span');
        span.textContent = item.label;

        const valueSpan = document.createElement('span');

        // Aqui se pone porcentaje a eng ratio
        if (item.label == 'Eng Ratio') {
            valueSpan.textContent = item.value + " %"
        } else {
            valueSpan.textContent = formateaNumero(item.value);
        }

        statDiv.appendChild(flexDiv);
        statDiv.appendChild(span);
        statDiv.appendChild(valueSpan);

        statsDiv.appendChild(statDiv);
    });

    influcardDiv.appendChild(statsDiv);

    return influcardDiv;
}




