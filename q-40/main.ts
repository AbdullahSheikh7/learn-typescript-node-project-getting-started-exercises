function make_album(artist_name: string, album_title: string, num_tracks?: number): { artist: string, album: string, tracks?: number } {
  let res: { artist: string, album: string, tracks?: number } = { artist: artist_name, album: album_title };
  if (num_tracks) {
    res.tracks = num_tracks;
  }
  return res;
}

let album1 = make_album('Artist1', 'Album1', 10);
console.log(album1);

let album2 = make_album('Artist2', 'Album2', 12);
console.log(album2);

let album3 = make_album('Artist3', 'Album3');
console.log(album3);
