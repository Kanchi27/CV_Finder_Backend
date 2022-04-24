import { Candidate } from "../models/index.js";
import { NO_CANDIDATE_FOUND, NO_RESUME_FOUND, UNKNOWN_ERROR_OCCURRED, FULL_NAME_REQUIRED } from "../constants/index.js";

export const getResumeByName = async (req, res) => {
    const candidateName = req.params.candidateName;
    const [firstName, lastName] = candidateName.replace("+", " ").split(' ');
    if (!firstName || !lastName) {
        return res.status(200).json({ message: FULL_NAME_REQUIRED });
    }
    try {
        const response = await Candidate.findAll({ where: { firstName, lastName } });
        if (response.length) {
            return res.status(200).json(response[0]);
        } else {
            const firstNameMatches = await Candidate.findAll({ where: { firstName } });
            const lastNameMatches = await Candidate.findAll({ where: { lastName } });
            const allMatches = [...firstNameMatches, ...lastNameMatches];
            if (allMatches.length) {
                return res.status(200).json(allMatches);
            } else {
                res.status(200).json({ message: NO_CANDIDATE_FOUND });
            }

        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getResumeById = async (req, res) => {
    const { id } = req.params;
    try {
        const candidate = await Candidate.findByPk(id);
        candidate === null ? res.status(200).json({ message: NO_RESUME_FOUND }) : res.status(200).json(candidate);
    } catch (error) {
        res.status(500).json({ message: error.message || UNKNOWN_ERROR_OCCURRED });
    }
}

export const uploadResume = async (req, res) => {
    const { firstName, lastName, jobTitle, jobDescription, currentCompany } = req.body;
    try {
        const candidate = await Candidate.create({ firstName, lastName, jobTitle, jobDescription, currentCompany });
        res.status(201).json({ resumeId: candidate.id });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

