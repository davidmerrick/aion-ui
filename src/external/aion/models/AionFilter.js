class AionFilter {
  constructor(filterReducer) {
    this.part_stat_filter = {
      rsvp_status: filterReducer.partstatFilter
    };
  }
}

export default AionFilter;
