export const UPDATE_ACTIVE_JOB = "updateActiveJob";

export function updateActiveJob(newActiveJob) {
  return {
    type: UPDATE_ACTIVE_JOB,
    payload: {
      activeJob: newActiveJob
    }
  };
}
