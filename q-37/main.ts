function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
  return console.log(`The shirt is ${size} and has message "${message}"`);
}

// Large shirt with default message
make_shirt();

// Medium shirt with default message
make_shirt('Medium');

// Any size shirt with a different message
make_shirt('Small', 'Hello, World!');
