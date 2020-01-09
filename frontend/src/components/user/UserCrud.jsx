import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'address-card-o',
    title: 'Cadastro de Novos Usuários',
}

const baseUrl = 'http://127.0.0.1:3001/api/users'


export default class UserCrud extends Component {

    constructor(props) {
        super(props)
        this.state = { nome: '', email: '', list: [] }

        this.handleChangeNome = this.handleChangeNome.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.save = this.save.bind(this)
        this.clear = this.clear.bind(this)
        this.load = this.load.bind(this)
        this.remove = this.remove.bind(this)
    }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    handleChangeNome(e) {
        this.setState({ ...this.state, nome: e.target.value })
    }

    handleChangeEmail(e) {
        this.setState({ ...this.state, email: e.target.value })
    }

    save() {
        const nome = this.state.nome
        const email = this.state.email
        axios.post(baseUrl, { nome, email })
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.state.nome = '',
                    this.state.email = ''
                this.setState({ list })
            })
    }

    clear() {
        const nome = ''
        const email = ''
        this.setState({ nome, email })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u._id !== user._id)
        if (add) list.unshift(user)
        return list
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="font-weight-bold text-uppercase">Nome</label>
                            <input type="text" className="form-control" name="nome" placeholder="Digite o nome..."
                                value={this.state.nome} onChange={this.handleChangeNome} />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="font-weight-bold text-uppercase">E-mail</label>
                            <input type="text" className="form-control" name="email" placeholder="Digite o e-mail..."
                                value={this.state.email} onChange={this.handleChangeEmail} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary btn-sm" onClick={e => this.save(e)}>Salvar</button>
                        <button className="btn btn-dark ml-1 btn-sm" onClick={e => this.clear(e)}>Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user._id}`)
            .then(resp => {
                const list = this.getUpdatedList(user, false)
                this.setState({ list })
            })
    }

    renderTable() {
        return (
            <table className="table table-striped mt-2">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.nome}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning btn-sm" onClick={() => this.load(user)}><i className="fa fa-pencil"></i></button>
                        <button className="btn btn-danger btn-sm ml-1" onClick={() => this.remove(user)}><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}