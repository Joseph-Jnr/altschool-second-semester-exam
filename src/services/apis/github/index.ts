/* eslint-disable no-useless-catch */
import axios from '@/services/axios'

// Get user profile
export const GetUserProfile = async () => {
  try {
    const url = '/users/Joseph-Jnr'
    const res = await axios.get(url)
    return res?.data
  } catch (err) {
    throw err
  }
}

// Get user repositories
export const GetRepos = async () => {
  try {
    const url = '/users/Joseph-Jnr/repos'
    const res = await axios.get(url)
    return res.data
  } catch (err) {
    throw err
  }
}

// Get repository details
export const GetSingleRepo = async (repoName: any) => {
  try {
    const url = `/repos/Joseph-Jnr/${repoName}`
    const res = await axios.get(url)
    return res.data
  } catch (err) {
    throw err
  }
}

// Get repo content
export const GetRepoContents = async (repoName: any) => {
  try {
    const url = `/repos/Joseph-Jnr/${repoName}/contents`
    const res = await axios.get(url)
    return res.data
  } catch (err) {
    throw err
  }
}
