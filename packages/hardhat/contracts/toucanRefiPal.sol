//SPDX-License-Identifier:MIT
pragma solidity ^0.8.2;
import "./refiInterface.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ToucanRefiPal {
    RefiInterface refiInt;

    //bct: 0x4c5f90C50Ca9F849bb75D93a393A4e1B6E68Accb
    constructor() {
        refiInt = RefiInterface(0x4c5f90C50Ca9F849bb75D93a393A4e1B6E68Accb); //0xfb60a08855389F3c0A66b29aB9eFa911ed5cbCB5);
    }

    function getTotalSupply() public view returns (uint) {
        return refiInt.totalSupply();
    }

    function getBalance(address _token) public view returns (uint) {
        return IERC20(_token).balanceOf(msg.sender);
    }

    function depositTCo2(address tc, uint amount) public {
        // IERC20(tc).allowance(msg.sender,address(this));
        //0xF0a5bF1336372FdBc2C877bCcb03310D85e0BF81
        require(IERC20(tc).balanceOf(msg.sender) > 0, "ballance is less");
        require(
            IERC20(tc).transferFrom(msg.sender, address(this), amount),
            "failed 1"
        );
        require(IERC20(tc).approve(address(refiInt), (amount)), "faile 2");
        refiInt.deposit(tc, amount);
        refiInt.transfer(msg.sender, amount);
    }

    function check(address tc) public view returns (bool) {
        bool ch = refiInt.checkEligible(tc);
        return ch;
    }

    function calRedeemFees(
        address[] memory tco2s,
        uint256[] memory amounts
    ) external view returns (uint256) {
        return refiInt.calculateRedeemFees(tco2s, amounts);
    }

    function getScored() public view returns (address[] memory) {
        return refiInt.getScoredTCO2s();
    }

    function getRemaining() public view returns (uint) {
        return refiInt.getRemaining();
    }

    function getReedemAuto2(address tco2, uint amount) public {
        IERC20(address(refiInt)).transferFrom(
            msg.sender,
            address(this),
            amount
        );

        refiInt.redeemAndBurn(tco2, amount);
        IERC20(tco2).transfer(msg.sender, amount);
    }

    function getBTCBAlance() public view returns (uint) {
        return refiInt.balanceOf(address(this));
    }

    function getTC02BAlance(address tco2) public view returns (uint) {
        return IERC20(tco2).balanceOf(msg.sender);
    }

    function getTC02PoolBalance(address tco2) public view returns (uint) {
        return refiInt.tokenBalances(tco2);
    }

    function shareTokens(address _token, address _to, uint amount) public {
        require(
            IERC20(_token).transferFrom(msg.sender, address(this), amount),
            "failed"
        );
        require(IERC20(_token).transfer(_to, amount), "failed");
    }
}
