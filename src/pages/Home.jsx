import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact"
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import Spinner from '../components/Spinner';
import Charts from '../components/Charts';
import '../style.css'
import { updateItem } from '../Redux/Actions/ItemAction';



class Home extends Component {
    state = {
        initialInvestment: 0,
        monthlyInvestment: 0,
        data: [],
        loading: false
    }

    componentDidMount() {
        this.setState({ data: [] })
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        if (this.props.data !== this.state.data) {
            this.setState({ data: this.props.data, loading: false });
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    submit = (e) => {
        let form = {
            initialInvestment: this.state.initialInvestment,
            monthlyInvestment: this.state.monthlyInvestment
        }
        this.props.updateItem(form);
        this.setState({ loading: true })
    }

    render() {
        return (
            <div>
                <Navbar />
                <MDBContainer className="body">
                    <MDBRow>
                        <MDBCol style={{ padding: "4em 2em" }} >
                            <h3>Plan Projection</h3>
                            <hr />
                            <h5>This is an illustration of your plan and our recommendation based on your input. We ran 1,000 simulations to determine your range of possible outcomes at any point in the future net of all fees.</h5>
                            <MDBRow>
                                <MDBCol>
                                    <MDBInput id='initialInvestment' value={this.state.initialInvestment} onChange={this.handleChange} label='Initial Investment' type='number' background size="sm" />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput id='monthlyInvestment' value={this.state.monthlyInvestment} onChange={this.handleChange} label='Monthly Investment' type='number' background size="sm" />
                                    <h6>Recommended: S$1,140</h6>
                                </MDBCol>
                                <div style={{ padding: "1em 0em" }}>
                                    <MDBBtn outline color="secondary" size='medium' onClick={this.submit} >Calculate</MDBBtn>
                                </div>
                            </MDBRow>
                            <MDBRow>
                                {this.state.loading ? <Spinner/> :
                                    this.state.data.length !== 0 && <Charts data={this.state.data} />}
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}
Home.propTypes = {
    updateItem: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    data: state.item.result,
});

export default connect(mapStateToProps, { updateItem })(Home)
