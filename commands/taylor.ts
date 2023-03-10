import { Context } from "telegraf"

const taylorStickers = [
    'CAACAgEAAxkBAAEHq_hj5n_brovysaP4PxR4JOzdDuJyFQACcQEAAjPgrS07JzpttjJAYi4E',
    'CAACAgEAAxkBAAEHq_lj5n_bHHW_XhOH_TP1WQOFTSwZuwACSAEAAjPgrS2t-tW8gfOteC4E',
    'CAACAgEAAxkBAAEHq_pj5n_bTocAATREOEPbF0d-Kg64Rr8AAkkBAAIz4K0tTP7G80kAAUfnLgQ',
    'CAACAgEAAxkBAAEHq_tj5n_b8VgT3YzBpNfmR52up_Y0PAACSgEAAjPgrS1fzRnAW0vytC4E',
    'CAACAgEAAxkBAAEHq_xj5n_bhFYCtMpNGjHLaluZDsX3sAACSwEAAjPgrS0xZ81yi2TDNC4E',
    'CAACAgEAAxkBAAEHq_1j5n_bsQ8L0FdLxKUGlpu_24a5EAACTAEAAjPgrS3MwkdHtCxEvC4E',
    'CAACAgEAAxkBAAEHq_5j5n_bbMBY2PL4HnzUQovb2UfKMAACTQEAAjPgrS0TB9eH3_eHrS4E',
    'CAACAgEAAxkBAAEHq_9j5n_bhxIVQLfeY1TKxjlyoxr6BwACTgEAAjPgrS2Zwz0Q6y56Ry4E',
    'CAACAgEAAxkBAAEHrAABY-Z_2xJwyPPq4aBUiChj3QnRfhoAAk8BAAIz4K0tVx3CkzfWFcsuBA',
    'CAACAgEAAxkBAAEHrAFj5n_baGHdbvnrvQlSEqezgf8ypwACUAEAAjPgrS2BKpcZW3Vcri4E',
    'CAACAgEAAxkBAAEHrAJj5n_b4vhdvc9C16rGsldql3w1agACVAEAAjPgrS0IZr4pWJK_ji4E',
    'CAACAgEAAxkBAAEHrANj5n_bXTgog0fY0GVkKltN89NqpwACVQEAAjPgrS0EHGqPcJ976C4E',
    'CAACAgEAAxkBAAEHrARj5n_b-JYh5MEt8sZG-J2KuNtnIQACUwEAAjPgrS3RQLOsHaZjYi4E',
    'CAACAgEAAxkBAAEHrAVj5n_bFYXaKuZSkAw1jX-usibV_wACUgEAAjPgrS1wKIMv10k5_y4E',
    'CAACAgEAAxkBAAEHrAZj5n_b5nr5dVdLYlgKYF2JbHjWGAACUQEAAjPgrS3VRUYuhdb60C4E',
    'CAACAgEAAxkBAAEHrAdj5n_b7cWXFKnbRJcIpDVXkHfQygACVgEAAjPgrS2osf3RJuO5Sy4E',
    'CAACAgEAAxkBAAEHrAhj5n_b0gQ98m4m_zJv4L95MeFI5QACVwEAAjPgrS2xLl4VCOv2wi4E',
    'CAACAgEAAxkBAAEHrAlj5n_byNYyMuNU6V1VTYbHUxXxTwACWAEAAjPgrS35b7-IfBH3jS4E',
    'CAACAgEAAxkBAAEHrApj5n_bokBbwmtsLvevJ8tKzKMQFgACWQEAAjPgrS3g0PHsdAEhYC4E',
    'CAACAgEAAxkBAAEHrAtj5n_bK4KFtbCK0FC7Rd1WqUkvKwACWgEAAjPgrS2PIZLLeYXbMi4E',
    'CAACAgEAAxkBAAEHrAxj5n_bcn6-teXW-KMD1x2-K_ajGwACXwEAAjPgrS0onswo8tYh7i4E',
    'CAACAgEAAxkBAAEHrA1j5n_bAiV8R5JgwZKq_SC3i_OqEwACXgEAAjPgrS3UMeyMWJGyuy4E',
    'CAACAgEAAxkBAAEHrA5j5n_bJM_9hlubAAEmFi3BZDIHHdoAAl0BAAIz4K0tfYF_oUxCV04uBA',
    'CAACAgEAAxkBAAEHrA9j5n_bPKdSGd1pt50oAyb4WD_59AACXAEAAjPgrS3AVX22jkGTHS4E',
    'CAACAgEAAxkBAAEHrBBj5n_b7uAMxevROYwTbNqTxQEVRQACWwEAAjPgrS0QBPRhtRBOry4E',
]

export const randomTaylorSticker = (ctx: Context) => {
    const sticker = taylorStickers[Math.floor(Math.random() * taylorStickers.length)]
    ctx.sendSticker(sticker)
}
