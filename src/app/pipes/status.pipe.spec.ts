import { StatusPipe } from './status.pipe';

fdescribe('StatusPipe', () => {
  const pipe = new StatusPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should get the right status', () => {
    const result = pipe.transform('APPLICATION')
    expect(result).toEqual('Candidature');
  }

  );
});
