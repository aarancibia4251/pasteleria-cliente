import * as moment from 'moment';

export class DateHelper {
  public static getCurrentDate(): Date {
    return moment().toDate();
  }
}
