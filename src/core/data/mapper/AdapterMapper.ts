export interface AdapterMapper<W, D, M> {
  mapperFromWsToDb(item: W): D;
  mapperFromListWsToListDb(item: Array<W>): Array<D>;

  mapperFromDbToModel(item: D): M;
  mapperFromListDbToListModel(item: Array<D>): Array<M>;
}
