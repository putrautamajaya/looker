export const SELECT_JOB = "selectJob";

export function selectJob(selectedJob) {
  return {
    type: SELECT_JOB,
    payload: {
      selectedJob: selectedJob
    }
  };
}
