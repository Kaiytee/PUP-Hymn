const audio = document.getElementById('audio-player');  
const lyricsContainer = document.getElementById('lyrics-container');

const lyrics = [
      { time: 12, text: "Sintang Paaralan" },
      { time: 14, text: "Tanglaw ka ng bayan" },
      { time: 18, text: "Pandayan ng isip ng kabataan" },
      { time: 24, text: "Kami ay dumating nang salat sa yaman" },
      { time: 29, text: "Hanap na dunong ay iyong alay" },
      { time: 35, text: "Ang layunin mong makatao" },
      { time: 41, text: "Dinarangal ang Pilipino" },
      { time: 47, text: "Ang iyong aral, diwa, adhikang taglay" },
      { time: 54, text: "PUP, aming gabay" },
      { time: 56, text: "Paaralang dakila" },
      { time: 62, text: "PUP, pinagpala" },
      { time: 68, text: "Gagamitin ang karunungan" },
      { time: 75, text: "Mula sa iyo, para sa bayan" },
      { time: 81, text: "Ang iyong aral, diwa, adhikang taglay" },
      { time: 87, text: "PUP, aming gabay" },
      { time: 89, text: "Paaralang dakila" },
      { time: 96, text: "PUP, pinagpala" },
      { time: 105, text: "" },
    ];

    audio.addEventListener('timeupdate', () => {
      const currentTime = audio.currentTime;
      // Find the current lyrics based on the current time
      const currentLyric = lyrics.find(lyric => lyric.time <= currentTime && (lyrics[lyrics.indexOf(lyric) + 1] ? lyrics[lyrics.indexOf(lyric) + 1].time > currentTime : true));
      
      // Clear previous highlights
      lyricsContainer.querySelectorAll('.highlight').forEach(element => {
        element.classList.remove('highlight');
      });

      // Highlight the current lyric
      if (currentLyric) {
        const lyricElement = document.getElementById(`lyric-${lyrics.indexOf(currentLyric)}`);
        if (lyricElement) {
          lyricElement.classList.add('highlight');
          // Scroll to the current lyric
          lyricsContainer.scrollTo({
            top: lyricElement.offsetTop - lyricsContainer.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });

    // Display lyrics
    lyrics.forEach((lyric, index) => {
      const lyricElement = document.createElement('div');
      lyricElement.textContent = lyric.text;
      lyricElement.id = `lyric-${index}`;
      lyricsContainer.appendChild(lyricElement);
    });

    // Developed by Stefen Labinay | BSCS 3-5 