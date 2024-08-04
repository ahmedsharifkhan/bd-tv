const channels = [
    {
        name: "Bangladesh Television",
        logo: "https://imgur.com/H9qgGSc.png",
        link: "http://stream.wowzacdn.com/fh3rhr3j3/23998_hhs/btv.m3u8"
    },
    {
        name: "Bangladesh Television CTG",
        logo: "https://i.imgur.com/sTZelfs.png",
        link: "http://stream.wowzacdn.com/3Hsj5gfh/9fhejb_2kf/btv_ctg.m3u8"
    },
    {
        name: "BTV World",
        logo: "https://i.imgur.com/RR0Iv6V.png",
        link: "http://stream.wowzacdn.com/74urhfje3/G6K25_6d8/btv_world.m3u8"
    },
    // Add more channels as needed
];

const channelContainer = document.getElementById('channels');

channels.forEach(channel => {
    const channelDiv = document.createElement('div');
    channelDiv.className = 'channel';

    const channelLogo = document.createElement('img');
    channelLogo.src = channel.logo;
    channelLogo.alt = channel.name;

    const channelLink = document.createElement('a');
    channelLink.href = channel.link;
    channelLink.textContent = channel.name;
    channelLink.target = '_blank';

    channelDiv.appendChild(channelLogo);
    channelDiv.appendChild(channelLink);
    channelContainer.appendChild(channelDiv);
});
