function show_magicians(magicians: string[]) {
  magicians.forEach(magician => {
    console.log(magician);
  });
}

function make_great(magicians: string[]) {
  magicians.forEach((magician, index) => {
    magicians[index] = "The Great " + magician;
  });
}

const magicians: string[] = ['Merlin', 'Houdini', 'David Copperfield'];

make_great(magicians);
show_magicians(magicians);