export type Applicant = {
    id: string;
    name: string;
    status: 'OPEN' | 'ACCEPTED' | 'DECLINED';
}

export type ApplicantResponse = {
    message: string;
    applicant?: Applicant;
};

export type ApplicantsResponse = {
    message: string;
    applicants?: Applicant[];
};