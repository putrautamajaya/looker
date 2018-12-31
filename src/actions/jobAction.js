export const UPDATE_JOBS = "updateJobs";

export function updateJobs(newJobs) {
  return {
    type: UPDATE_JOBS,
    payload: {
      jobs: newJobs
    }
  };
}
